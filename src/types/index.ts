export interface IItem {
  id: string;
  name: string;
  description: string;
  price: number;
  full_background: string;
}

export interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}