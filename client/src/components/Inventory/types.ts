import {TRHNumberValueType} from '../../shared/components';

export interface IProductInventoryDefaultValues {
  product_search_term: string;
  product_id: string | null;
  enabled_variations: string[];
  variation_values: {variation_title: string; variant_metadata_id?: string}[];
  override_capital_price: TRHNumberValueType;
  override_selling_price: TRHNumberValueType;
  override_discount: TRHNumberValueType;
  available_qty: TRHNumberValueType;
  min_available_qty: TRHNumberValueType;
}
