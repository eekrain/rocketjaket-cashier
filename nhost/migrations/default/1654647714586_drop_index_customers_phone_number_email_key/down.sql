CREATE  INDEX "customers_phone_number_email_key" on
  "public"."customers" using btree ("email", "phone_number");
