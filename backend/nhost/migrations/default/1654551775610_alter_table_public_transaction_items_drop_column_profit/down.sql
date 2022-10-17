alter table "public"."transaction_items" alter column "profit" drop not null;
alter table "public"."transaction_items" add column "profit" int4;
