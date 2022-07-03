alter table "public"."users_metadata" alter column "avatar_file_id" drop not null;
alter table "public"."users_metadata" add column "avatar_file_id" text;
