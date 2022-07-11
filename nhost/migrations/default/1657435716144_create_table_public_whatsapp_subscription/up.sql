CREATE TABLE "public"."whatsapp_subscription" ("id" serial NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "until" timestamptz NOT NULL, PRIMARY KEY ("id") );
