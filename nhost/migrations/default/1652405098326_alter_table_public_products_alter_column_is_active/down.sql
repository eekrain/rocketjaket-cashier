alter table "public"."products" alter column "is_active" drop not null;
ALTER TABLE "public"."products" ALTER COLUMN "is_active" drop default;
