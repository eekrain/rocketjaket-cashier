alter table "public"."inventory_product_variants"
  add constraint "inventory_product_variants_inventory_variant_metadata_id_fke"
  foreign key ("inventory_variant_metadata_id")
  references "public"."inventory_variants_metadata"
  ("id") on update restrict on delete restrict;
