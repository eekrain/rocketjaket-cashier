import { Request, Response } from "express";
import { getAdminSdk } from "../utils";
import to from "await-to-js";

export default async (req: Request, res: Response) => {
  const eventData: UpdateAvailableQtyOnInsertTransactionItem_EventData =
    req.body.event.data;
  // console.log(
  //   "🚀 ~ file: UpdateAvailableQtyOnInsertTransactionItem.ts ~ line 6 ~ handler ~ eventData",
  //   eventData
  // );

  const sdk = getAdminSdk();

  const [errInv, resInv] = await to(
    sdk.Inventory_GetInventoryProductById({
      id: eventData.new.inventory_product_id,
    })
  );

  const inv_pdk = resInv?.data?.inventory_products_by_pk;

  if (errInv || !resInv || !inv_pdk) {
    console.log(
      "🚀 ~ file: UpdateAvailableQtyOnInsertTransactionItem.ts ~ line 21 ~ errInv",
      errInv
    );
    return res.status(500).send("Internal server error");
  }
  const qtyBefore = inv_pdk.available_qty;
  const newAvailableQty = qtyBefore
    ? qtyBefore - eventData.new.purchase_qty
    : qtyBefore;

  // console.log(
  //   "🚀 ~ file: UpdateAvailableQtyOnInsertTransactionItem.ts ~ line 32 ~ newAvailableQty",
  //   newAvailableQty
  // );

  const [errUpdate, resUpdate] = await to(
    sdk.Inventory_UpdateInventoryProductById({
      id: eventData.new.inventory_product_id,
      updateInventory: {
        available_qty: newAvailableQty,
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
