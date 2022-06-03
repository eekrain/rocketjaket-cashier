// How do returning process works ?
// ==============================================================================
// Misal beli 3 item.
// Mau balikin 1.
// Di transaction_item yg update, akan di update purchase_qty nya menjadi jumlah yg dikembalikan,
// contoh kasus ini purchase_qty menjadi 1, dan transaction_status berubah dari success ke refund.
// Kemudian di inventory_productnya akan ditambahkan available_qty nya dengan purchase_qty(old),
// alias kita anggap dibalikin aja dulu semua item yg dibeli,
// contoh kasus ini inventory product ditambahin 3.
// Setelah selesai urusan update menjadi refund,
// apabila jumlah purchase_qty(old) lebih dari 1 DAN purchase_qty(new) tidak sama dengan purchase_qty(old),
// alias tidak dikembalikan semuanya,
// contoh kasus ini purchase_qty(old) nya  = 3 dan purchase_qty(new) nya = 1 (jelas tidak dikembalikan semua).
// Maka di transaction_item dibuatkan item baru lagi (masih inventory produk yg sama),
// khusus untuk jumlah baru yg sukses dibeli, sedangkan jika jumlah purchase_qty(old) hanya 1,
// tidak perlu untuk membuat transaction_item (karena sama saja dengan dikembalikan semua)
// Ini dihitung dengan purchase_qty(old) - purchase_qty(new, dari event update yg tadi), contoh kasus ini 3 - 1 = 2.
// Nanti waktu kita insert dengan jumlah 2, maka inventory product akan berkurang 2 buah.

import { Request, Response } from "express";
import { getAdminSdk } from "../utils";
import to from "await-to-js";
import {
  Transaction_Items_Insert_Input,
  Transaction_Status_Enum_Enum,
} from "../graphql/gql-generated";

interface UpdateAvailableQtyOnUpdateTransactionItem_EventData {
  old?: Transaction_Items_Insert_Input | null;
  new: Transaction_Items_Insert_Input;
}

export default async (req: Request, res: Response) => {
  const eventData: UpdateAvailableQtyOnUpdateTransactionItem_EventData =
    req.body.event.data;
  console.log(
    "🚀 ~ file: UpdateAvailableQtyOnUpdateTransactionItem.ts ~ line 7 ~ eventData",
    eventData
  );

  if (
    eventData?.old?.transaction_status ===
      Transaction_Status_Enum_Enum.Success &&
    eventData?.new?.transaction_status !== Transaction_Status_Enum_Enum.Success
  ) {
    return process(eventData, req, res);
  } else {
    // This event only proceeds updated transaction_items from success to return
    return res
      .status(200)
      .send(
        "This event only proceeds updated transaction_items from success to return"
      );
  }
};

const process = async (
  eventData: UpdateAvailableQtyOnUpdateTransactionItem_EventData,
  req: Request,
  res: Response
) => {
  const sdk = getAdminSdk();

  const [errInv, resInv] = await to(
    sdk.Inventory_GetInventoryProductById({
      id: eventData?.new?.inventory_product_id,
    })
  );

  const inv_pdk = resInv?.data?.inventory_products_by_pk;

  if (errInv) {
    // If error happens when requesting the inventory product
    console.log(
      "🚀 ~ file: UpdateAvailableQtyOnUpdateTransactionItem.ts ~ line 21 ~ errInv",
      errInv
    );
    return res.status(500).send("Internal server error");
  }
  if (!resInv || !inv_pdk) {
    // If inventory product is actually not found, might be the inventory already deleted,
    //then skip the available_qty synchronizing process
    return res.status(200).send("Inventory isnt found, no need syncing");
  }

  const qtyBefore = inv_pdk.available_qty;
  if (
    typeof eventData?.old?.purchase_qty !== "number" ||
    typeof eventData?.new?.purchase_qty !== "number"
  ) {
    return res
      .status(200)
      .send("Purchase qty is undefined, skipping the syncing process");
  }
  const newAvailableQtyAfterReturn = qtyBefore
    ? qtyBefore + eventData.old?.purchase_qty
    : qtyBefore;

  // console.log(
  //   "🚀 ~ file: UpdateAvailableQtyOnUpdateTransactionItem.ts ~ line 32 ~ newAvailableQtyAfterReturn",
  //   newAvailableQtyAfterReturn
  // );

  const [errUpdateAvailableQty, resUpdateAvailableQty] = await to(
    sdk.Inventory_UpdateInventoryProductById({
      id: eventData.new.inventory_product_id,
      updateInventory: {
        available_qty: newAvailableQtyAfterReturn,
      },
    })
  );
  if (errUpdateAvailableQty || !resUpdateAvailableQty) {
    console.log(
      "🚀 ~ file: UpdateAvailableQtyOnUpdateTransactionItem.ts ~ line 47 ~ errUpdateAvailableQty",
      errUpdateAvailableQty
    );
    return res.status(500).send("Error when requesting update available_qty");
  }

  if (eventData.old.purchase_qty !== eventData.new.purchase_qty) {
    console.log(
      "HIT ON eventData.old.purchase_qty !== eventData.new.purchase_qty"
    );
    const succeedQty = eventData.old.purchase_qty - eventData.new.purchase_qty;

    const subtotal =
      eventData.new.selling_price! * succeedQty -
      (eventData.new.selling_price! * succeedQty * eventData.new.discount!) /
        100;
    const profit = subtotal - eventData.new.capital_price! * succeedQty;
    console.log(
      "🚀 ~ file: UpdateAvailableQtyOnUpdateTransactionItem.ts ~ line 125 ~ succeedQty",
      succeedQty
    );
    const [errInsertTransactItem, resInsertTransactItem] = await to(
      sdk.Transaction_CreateOneTransactionItem({
        object: {
          ...eventData.old,
          id: undefined,
          purchase_qty: succeedQty,
          subtotal,
          profit,
        },
      })
    );

    if (errInsertTransactItem || !resInsertTransactItem) {
      console.log(
        "🚀 ~ file: UpdateAvailableQtyOnUpdateTransactionItem.ts ~ line 139 ~ errInsertTransactItem",
        errInsertTransactItem
      );
      return res
        .status(500)
        .send("Error when requesting insert succeed transaction_items");
    }
    console.log(
      "🚀 ~ file: UpdateAvailableQtyOnUpdateTransactionItem.ts ~ line 139 ~ resInsertTransactItem",
      resInsertTransactItem
    );
  }

  // Kurang notifikasi jika kurang dari min_available_qty

  return res.status(200).send("OK");
};
