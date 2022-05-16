alter table "public"."inventory_product_variants" drop constraint "inventory_product_variant_inventory_product_id_fkey",
  add constraint "inventory_product_variants_inventory_product_id_fkey"
  foreign key ("inventory_product_id")
  references "public"."inventory_products"
  ("id") on update restrict on delete restrict;
