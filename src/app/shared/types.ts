
export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: any;
  image: string;
  rating: IRating;
  isAvailable: boolean
}

export interface IRating {
  rate: number;
  count: number;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}
export type TCategory =  "mensClothing" | "jewelery" | "electronics" | "womensClothing"
