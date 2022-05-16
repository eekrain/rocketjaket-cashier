CREATE TABLE "public"."transaction" ("invoice_number" text NOT NULL, "karyawan_name" text NOT NULL, "total_transaction" integer NOT NULL, "cash_in_amount" integer NOT NULL, "cash_change" integer NOT NULL, "transaction_status" text NOT NULL, "payment_type" text NOT NULL, "refund_reason" text, "store_id" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("invoice_number") , FOREIGN KEY ("payment_type") REFERENCES "public"."transaction_payment_type_enum"("payment_type") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("transaction_status") REFERENCES "public"."transaction_status_enum"("transaction_status") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("store_id") REFERENCES "public"."stores"("id") ON UPDATE restrict ON DELETE cascade, UNIQUE ("invoice_number"));
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
CREATE TRIGGER "set_public_transaction_updated_at"
BEFORE UPDATE ON "public"."transaction"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_transaction_updated_at" ON "public"."transaction" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
