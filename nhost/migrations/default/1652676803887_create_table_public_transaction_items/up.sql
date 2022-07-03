CREATE TABLE "public"."transaction_items" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "transaction_invoice_number" text NOT NULL, "product_name" text NOT NULL, "capital_price" integer NOT NULL, "selling_price" integer NOT NULL, "discount" integer NOT NULL, "purchase_qty" integer NOT NULL, "subtotal" integer NOT NULL, "profit" integer NOT NULL, "transaction_status" text NOT NULL, "inventory_product_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("inventory_product_id") REFERENCES "public"."inventory_products"("id") ON UPDATE cascade ON DELETE no action, FOREIGN KEY ("transaction_invoice_number") REFERENCES "public"."transaction"("invoice_number") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("transaction_status") REFERENCES "public"."transaction_status_enum"("transaction_status") ON UPDATE restrict ON DELETE restrict);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_transaction_items_updated_at"
BEFORE UPDATE ON "public"."transaction_items"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_transaction_items_updated_at" ON "public"."transaction_items" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
