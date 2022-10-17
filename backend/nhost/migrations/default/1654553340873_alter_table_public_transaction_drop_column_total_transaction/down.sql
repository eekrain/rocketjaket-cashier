alter table "public"."transaction" alter column "total_transaction" drop not null;
alter table "public"."transaction" add column "total_transaction" int4;
