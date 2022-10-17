alter table "public"."transaction" alter column "cash_change" drop not null;
alter table "public"."transaction" add column "cash_change" int4;
