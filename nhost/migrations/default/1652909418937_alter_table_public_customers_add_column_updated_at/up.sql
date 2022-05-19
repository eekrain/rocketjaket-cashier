alter table "public"."customers" add column "updated_at" timestamptz
 null default now();
