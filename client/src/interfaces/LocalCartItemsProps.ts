export interface LocalCartItemsProps {
  cartItems: {
    id: string;
    img: string;
    name: string;
    price: number;
    quantity: number;
    rating: number;
  }[];
}
