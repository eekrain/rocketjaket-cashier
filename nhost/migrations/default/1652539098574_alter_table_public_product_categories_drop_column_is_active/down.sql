alter table "public"."product_categories" alter column "is_active" set default true;
alter table "public"."product_categories" alter column "is_active" drop not null;
alter table "public"."product_categories" add column "is_active" bool;
