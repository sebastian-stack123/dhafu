export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

export interface Collection {
  id: string;
  name: string;
  image: string;
}
