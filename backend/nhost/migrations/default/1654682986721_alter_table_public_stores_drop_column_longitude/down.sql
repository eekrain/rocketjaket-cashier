alter table "public"."stores" alter column "longitude" drop not null;
alter table "public"."stores" add column "longitude" text;
