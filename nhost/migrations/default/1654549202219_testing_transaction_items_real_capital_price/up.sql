CREATE OR REPLACE FUNCTION transaction_items_real_capital_price(transaction_item_row transaction_items)
RETURNS INT AS $$
  SELECT transaction_item_row.capital_price
$$ LANGUAGE sql STABLE;
