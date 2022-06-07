CREATE OR REPLACE FUNCTION public.transaction_items_real_capital_price(transaction_item_row transaction_items)
 RETURNS integer
 LANGUAGE sql
 STABLE
AS $function$
  SELECT case WHEN transaction_item_row.capital_price > 0
  THEN 1
  ELSE 2
  END
$function$;
