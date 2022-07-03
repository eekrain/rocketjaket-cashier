alter table "public"."users_metadata" drop constraint "users_metadata_user_id_fkey",
  add constraint "users_metadata_user_id_fkey"
  foreign key ("user_id")
  references "auth"."users"
  ("id") on update cascade on delete cascade;
