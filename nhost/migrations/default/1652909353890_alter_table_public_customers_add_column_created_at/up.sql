alter table "public"."customers" add column "created_at" timestamptz
 null default now();
