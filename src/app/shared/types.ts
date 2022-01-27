
export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: TCategory;
  image: string;
  rating: number;
  count: number;
  isAvailable: boolean;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}
export type TCategory = "mensClothing" | "jewelery" | "electronics" | "womensClothing"

export interface ISearchValue {
  filter: TFilterNames,
  sort: boolean
}

export type TFilterNames = 'price' | 'rating' | 'category'
export type TFilterNamesCart = 'price' | 'rating' | 'category'| 'quantity'
