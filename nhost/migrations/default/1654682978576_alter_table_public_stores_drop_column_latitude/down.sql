alter table "public"."stores" alter column "latitude" drop not null;
alter table "public"."stores" add column "latitude" text;
