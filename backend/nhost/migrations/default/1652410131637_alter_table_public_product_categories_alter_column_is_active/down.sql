alter table "public"."product_categories" alter column "is_active" drop not null;
ALTER TABLE "public"."product_categories" ALTER COLUMN "is_active" drop default;
