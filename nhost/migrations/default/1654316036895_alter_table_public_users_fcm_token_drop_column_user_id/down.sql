alter table "public"."users_fcm_token" alter column "user_id" drop not null;
alter table "public"."users_fcm_token" add column "user_id" uuid;
