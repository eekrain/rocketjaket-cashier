CREATE TABLE "public"."inventory_product_variant" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "inventory_product_id" uuid NOT NULL, "inventory_variant_metadata_id" integer NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("inventory_product_id") REFERENCES "public"."inventory_products"("id") ON UPDATE restrict ON DELETE restrict);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
