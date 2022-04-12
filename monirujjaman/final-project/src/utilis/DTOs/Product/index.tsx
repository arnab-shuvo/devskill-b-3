export interface ProductCreateDto {
  title: string;
  price: number;
  description: string;
  image: string;
  stock: number;
  category: {
    _id: string;
  };
}

export interface ProductReadDto {
  _id: object;
  title: string;
  price: number;
  description: string;
  image: string;
  stock: number;
  category: {
    _id: string;
    name: string;
  };
}
