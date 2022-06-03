import create from 'zustand';
import {createTrackedSelector} from 'react-tracked';

export interface ICartItem {
  product_photo_id?: string | null;
  product_inventory_id: string;
  product_name_concise: string;
  product_name: string;
  capital_price: number;
  selling_price: number;
  discount: number;
  available_qty: number;
  product_updated_at?: any;
  inventory_product_updated_at?: any;
  qty: number;
  transaction_item_id?: string;
}

export interface ICart {
  cartItems: ICartItem[];
  handleSetCartItems: (newItems: ICartItem[]) => void;
  handleAddToCart: (newItem: ICartItem) => void;
  handleRemoveFromCart: (removeItemId: string, isRefundPart?: boolean) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItem: () => number;
}

const zustandCartStore = create<ICart>((set, get) => ({
  cartItems: [],
  handleSetCartItems: newItems => {
    set(state => ({
      ...state,
      cartItems: newItems,
    }));
  },
  handleAddToCart: newItem => {
    const isItemInCart = get().cartItems.find(
      item => item.product_inventory_id === newItem.product_inventory_id,
    );
    if (isItemInCart) {
      if (
        typeof isItemInCart?.qty === 'number' &&
        isItemInCart?.qty < isItemInCart.available_qty
      ) {
        // console.log(
        //   '🚀 ~ file: cart.ts ~ line 44 ~ isItemInCart?.qty',
        //   isItemInCart?.qty,
        // );
        set(state => ({
          ...state,
          cartItems: state.cartItems.map(item => {
            return item.product_inventory_id === newItem.product_inventory_id
              ? {
                  ...item,
                  qty: typeof item?.qty === 'number' ? item.qty + 1 : item.qty,
                }
              : item;
          }),
        }));
      }
    } else {
      // First time the item is added
      set(state => ({
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            ...newItem,
            qty: 1,
          },
        ],
      }));
    }
  },
  handleRemoveFromCart: (removeItemId, isRefundPart = false) => {
    set(state => ({
      ...state,
      cartItems: state.cartItems.reduce((prevVal, item) => {
        if (item.product_inventory_id === removeItemId) {
          if (item?.qty === 1 && !isRefundPart) return prevVal;
          else if (item?.qty && item?.qty <= 1 && isRefundPart) {
            return [...prevVal, {...item, qty: item.qty ? 0 : item.qty}];
          }
          return [
            ...prevVal,
            {...item, qty: item.qty ? item.qty - 1 : item.qty},
          ];
        } else {
          return [...prevVal, item];
        }
      }, [] as ICartItem[]),
    }));
  },
  clearCart: () => {
    set(state => ({
      ...state,
      cartItems: [],
    }));
  },
  getTotalPrice: () => {
    const total = get().cartItems.reduce((prevVal: number, item) => {
      const subTotal = item?.qty ? item.selling_price * item.qty : 0;

      if (item.discount !== 0 && item.qty) {
        return (
          prevVal +
          subTotal -
          (item.selling_price * item.qty * item.discount) / 100
        );
      }
      return prevVal + subTotal;
    }, 0);
    return total;
  },
  getTotalItem: () => {
    const total = get().cartItems.reduce(
      (prevVal: number, item) => (item.qty ? prevVal + item.qty : prevVal + 0),
      0,
    );
    return total;
  },
}));

export const useMyCart = createTrackedSelector(zustandCartStore);
