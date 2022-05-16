alter table "public"."inventory_products"
  add constraint "inventory_products_store_id_fkey"
  foreign key ("store_id")
  references "public"."stores"
  ("id") on update restrict on delete restrict;
