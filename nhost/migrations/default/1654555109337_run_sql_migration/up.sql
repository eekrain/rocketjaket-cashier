CREATE OR REPLACE FUNCTION public.transaction_total_transaction(transaction_row transaction)
 RETURNS bigint
 LANGUAGE sql
 STABLE
AS $function$
    SELECT SUM(public.transaction_items_subtotal(TI))
    FROM transaction AS T
    INNER JOIN transaction_items AS TI ON T.invoice_number = TI.transaction_invoice_number
    WHERE T.invoice_number = transaction_row.invoice_number
$function$;

CREATE OR REPLACE FUNCTION public.transaction_cash_change(transaction_row transaction)
 RETURNS bigint
 LANGUAGE sql
 STABLE
AS $function$
    SELECT transaction_row.cash_in_amount - public.transaction_total_transaction(transaction_row)
$function$;

CREATE OR REPLACE FUNCTION public.transaction_total_profit(transaction_row transaction)
 RETURNS bigint
 LANGUAGE sql
 STABLE
AS $function$
    SELECT SUM(public.transaction_items_profit(TI))
    FROM transaction AS T
    INNER JOIN transaction_items AS TI ON T.invoice_number = TI.transaction_invoice_number
    WHERE T.invoice_number = transaction_row.invoice_number
$function$;
