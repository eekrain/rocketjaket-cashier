alter table "public"."users_metadata"
  add constraint "users_metadata_store_id_fkey"
  foreign key ("store_id")
  references "public"."store"
  ("id") on update restrict on delete cascade;
