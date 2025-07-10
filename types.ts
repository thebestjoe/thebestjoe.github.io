
export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface Event {
    id: string;
    title: string;
    date: string;
    location: string;
    description: string;
}
