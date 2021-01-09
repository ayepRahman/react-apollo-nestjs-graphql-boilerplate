import { makeVar } from '@apollo/client';
import { LocalStorage } from 'enums/LocalStorage';

const cart = JSON.parse(localStorage.getItem(LocalStorage.CART) || '[]');

export interface CartVarProps {
  id?: string;
  img: string;
  name: string;
  rating: number;
  price: number;
  quantity: number;
}

export const cartVar = makeVar<CartVarProps[]>(cart || []);
