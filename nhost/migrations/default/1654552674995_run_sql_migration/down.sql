-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE OR REPLACE FUNCTION public.transaction_items_real_capital_price(transaction_item_row transaction_items)
--  RETURNS integer
--  LANGUAGE sql
--  STABLE
-- AS $function$
--   SELECT CASE
--     WHEN TI.capital_price > 0
--       THEN TI.capital_price
--     WHEN IP.override_capital_price > 0
--       THEN IP.override_capital_price
--     ELSE P.capital_price
--     END AS capital_price
--   FROM transaction_items AS TI
--   INNER JOIN inventory_products AS IP ON TI.inventory_product_id = IP.id
--   INNER JOIN products AS P ON IP.product_id = P.id
--   WHERE TI.id=transaction_item_row.id
-- $function$;
--
-- CREATE OR REPLACE FUNCTION public.transaction_items_subtotal(transaction_item_row transaction_items)
--  RETURNS integer
--  LANGUAGE sql
--  STABLE
-- AS $function$
--   SELECT (transaction_item_row.selling_price - transaction_item_row.selling_price * transaction_item_row.discount / 100) * transaction_item_row.purchase_qty as subtotal
-- $function$;
