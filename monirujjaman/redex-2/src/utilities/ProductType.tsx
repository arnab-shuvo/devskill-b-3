export type ProductType = {
  id: number;
  title: string;
  price: number;
  categary: "Electronics" | "Jewelery" | "Men's Clothing" | "Women's Clothing";
  description: string;
  image: string;
};
