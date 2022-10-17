alter table "public"."users_fcm_token"
  add constraint "users_fcm_token_user_id_fkey"
  foreign key ("user_id")
  references "auth"."users"
  ("id") on update cascade on delete cascade;
