import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ProductType } from './types/ProductsType';

type CartState = {
  cart: ProductType[];
  // addToCart: (product: ProductType) => void;
  // removeFromCart: (product: ProductType) => void;
  isOpen: boolean;
  toggleCart: () => void;
};

export const useCartStorage = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      isOpen: false,
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    { name: 'cart-storage' }
  )
);
