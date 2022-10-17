CREATE TABLE "public"."customers" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "phone_number" text NOT NULL, "email" text NOT NULL, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
