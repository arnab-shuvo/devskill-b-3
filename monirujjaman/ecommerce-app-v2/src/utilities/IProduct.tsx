interface IProduct {
  id: number;
  title: string;
  price: number;
  categary: string;
  description:
    | "Electronics"
    | "Jewelery"
    | "Men's Clothing"
    | "Women's Clothing";
  image: string;
}

export default IProduct;
