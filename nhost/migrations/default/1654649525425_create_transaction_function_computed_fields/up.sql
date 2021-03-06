CREATE OR REPLACE FUNCTION public.transaction_items_subtotal(transaction_item_row transaction_items)
 RETURNS integer
 LANGUAGE sql
 STABLE
AS $function$
  SELECT (transaction_item_row.selling_price - transaction_item_row.selling_price * transaction_item_row.discount / 100) * transaction_item_row.purchase_qty AS subtotal
$function$;


CREATE OR REPLACE FUNCTION public.transaction_total_purchased_product(transaction_row transaction)
 RETURNS bigint
 LANGUAGE sql
 STABLE
AS $function$
    SELECT SUM(TI.purchase_qty)
    FROM transaction AS T
    INNER JOIN transaction_items AS TI ON T.invoice_number = TI.transaction_invoice_number
    WHERE T.invoice_number = transaction_row.invoice_number AND TI.transaction_status = 'success'
$function$;



CREATE OR REPLACE FUNCTION public.transaction_items_real_capital_price(transaction_item_row transaction_items)
 RETURNS integer
 LANGUAGE sql
 STABLE
AS $function$
  SELECT CASE 
    WHEN TI.capital_price > 0
      THEN TI.capital_price
    WHEN IP.override_capital_price > 0
      THEN IP.override_capital_price
    ELSE P.capital_price
    END AS capital_price
  FROM transaction_items AS TI
  INNER JOIN inventory_products AS IP ON TI.inventory_product_id = IP.id
  INNER JOIN products AS P ON IP.product_id = P.id
  WHERE TI.id=transaction_item_row.id
$function$;


CREATE OR REPLACE FUNCTION public.transaction_items_profit(transaction_item_row transaction_items)
 RETURNS integer
 LANGUAGE sql
 STABLE
AS $function$
  SELECT public.transaction_items_subtotal(transaction_item_row) - (public.transaction_items_real_capital_price(transaction_item_row) * transaction_item_row.purchase_qty) AS profit
$function$;



CREATE OR REPLACE FUNCTION public.transaction_total_profit(transaction_row transaction)
 RETURNS bigint
 LANGUAGE sql
 STABLE
AS $function$
    SELECT SUM(public.transaction_items_profit(TI))
    FROM transaction AS T
    INNER JOIN transaction_items AS TI ON T.invoice_number = TI.transaction_invoice_number
    WHERE T.invoice_number = transaction_row.invoice_number AND TI.transaction_status = 'success'
$function$;



CREATE OR REPLACE FUNCTION public.transaction_total_transaction(transaction_row transaction)
 RETURNS bigint
 LANGUAGE sql
 STABLE
AS $function$
    SELECT SUM(public.transaction_items_subtotal(TI))
    FROM transaction AS T
    INNER JOIN transaction_items AS TI ON T.invoice_number = TI.transaction_invoice_number
    WHERE T.invoice_number = transaction_row.invoice_number AND TI.transaction_status = 'success'
$function$;



CREATE OR REPLACE FUNCTION public.transaction_cash_change(transaction_row transaction)
 RETURNS bigint
 LANGUAGE sql
 STABLE
AS $function$
    SELECT transaction_row.cash_in_amount - public.transaction_total_transaction(transaction_row)
$function$;