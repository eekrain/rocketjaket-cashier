alter table "public"."products" alter column "is_active" set default true;
alter table "public"."products" alter column "is_active" drop not null;
alter table "public"."products" add column "is_active" bool;
