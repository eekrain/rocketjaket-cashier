alter table "public"."products" alter column "photo_url" drop not null;
alter table "public"."products" add column "photo_url" int4;
