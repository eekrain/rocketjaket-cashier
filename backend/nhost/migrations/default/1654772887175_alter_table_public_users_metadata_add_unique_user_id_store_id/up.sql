alter table "public"."users_metadata" add constraint "users_metadata_user_id_store_id_key" unique ("user_id", "store_id");
