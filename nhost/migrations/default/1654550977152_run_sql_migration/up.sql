CREATE OR REPLACE FUNCTION public.transaction_items_real_capital_price(transaction_item_row transaction_items)
 RETURNS integer
 LANGUAGE sql
 STABLE
AS $function$
  SELECT capital_price
  FROM transaction_items AS TI
  WHERE TI.id=transaction_item_row.id
$function$;
