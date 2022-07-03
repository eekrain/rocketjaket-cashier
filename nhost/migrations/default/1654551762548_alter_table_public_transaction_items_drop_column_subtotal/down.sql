alter table "public"."transaction_items" alter column "subtotal" drop not null;
alter table "public"."transaction_items" add column "subtotal" int4;
