alter table "public"."inventory_products" drop constraint "inventory_products_product_id_fkey",
  add constraint "inventory_products_product_id_fkey"
  foreign key ("product_id")
  references "public"."products"
  ("id") on update restrict on delete restrict;
