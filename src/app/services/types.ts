import { ECategory } from './category';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: any;
  image: string;
  rating: IRating;
}

export interface IRating {
  rate: number;
  count: number;
}

export type TCategory =  "mensClothing" | "jewelery" | "electronics" | "womensClothing"
