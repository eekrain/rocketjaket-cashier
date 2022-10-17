alter table "public"."transaction_items" drop constraint "transaction_items_inventory_product_id_fkey",
  add constraint "transaction_items_inventory_product_id_fkey"
  foreign key ("inventory_product_id")
  references "public"."inventory_products"
  ("id") on update cascade on delete set null;
