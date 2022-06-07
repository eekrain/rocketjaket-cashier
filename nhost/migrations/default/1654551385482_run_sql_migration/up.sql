CREATE OR REPLACE FUNCTION public.transaction_items_real_capital_price(transaction_item_row transaction_items)
 RETURNS integer
 LANGUAGE sql
 STABLE
AS $function$
  SELECT CASE 
    WHEN TI.capital_price > 0
      THEN 1
    ELSE 0
    END AS capital_price
  FROM transaction_items AS TI
  INNER JOIN inventory_products AS IP ON TI.inventory_product_id = IP.id
  INNER JOIN products AS P ON IP.product_id = P.id
  WHERE TI.id=transaction_item_row.id
$function$;
