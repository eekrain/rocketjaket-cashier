alter table "public"."operational_costs" add column "created_at" timestamptz
 null default now();
