import { Request, Response } from "express";
import { getAdminSdk } from "../utils";
import to from "await-to-js";
import { Transaction_Items_Insert_Input } from "../graphql/gql-generated";

interface UpdateAvailableQtyOnInsertTransactionItem_EventData {
  old?: null;
  new: Transaction_Items_Insert_Input;
}

export default async (req: Request, res: Response) => {
  const eventData: UpdateAvailableQtyOnInsertTransactionItem_EventData =
    req.body.event.data;
  // console.log(
  //   "🚀 ~ file: UpdateAvailableQtyOnInsertTransactionItem.ts ~ line 6 ~ handler ~ eventData",
  //   eventData
  // );

  if (eventData.new.transaction_status !== "success") {
    // This event only proceeds succeed transaction_items
    return res
      .status(200)
      .send("This event only proceeds succeed transaction_items");
  }

  const sdk = getAdminSdk();

  const [errInv, resInv] = await to(
    sdk.Inventory_GetInventoryProductById({
      id: eventData.new.inventory_product_id,
    })
  );

  const inv_pdk = resInv?.data?.inventory_products_by_pk;

  if (errInv) {
    // If error happens when requesting the inventory product
    console.log(
      "🚀 ~ file: UpdateAvailableQtyOnInsertTransactionItem.ts ~ line 21 ~ errInv",
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

  if (typeof eventData?.new?.purchase_qty !== "number") {
    return res
      .status(200)
      .send("Purchase qty is undefined, skipping the syncing process");
  }

  const newAvailableQtyAfterBought = qtyBefore
    ? qtyBefore - eventData.new.purchase_qty
    : qtyBefore;

  // console.log(
  //   "🚀 ~ file: UpdateAvailableQtyOnInsertTransactionItem.ts ~ line 32 ~ newAvailableQtyAfterBought",
  //   newAvailableQtyAfterBought
  // );

  const [errUpdate, resUpdate] = await to(
    sdk.Inventory_UpdateInventoryProductById({
      id: eventData.new.inventory_product_id,
      updateInventory: {
        available_qty: newAvailableQtyAfterBought,
      },
    })
  );
  if (errUpdate || !resUpdate) {
    console.log(
      "🚀 ~ file: UpdateAvailableQtyOnInsertTransactionItem.ts ~ line 47 ~ errUpdate",
      errUpdate
    );
    return res.status(500).send("Internal server error");
  }

  // Kurang notifikasi jika kurang dari min_available_qty

  return res.status(200).send("OK");
};
