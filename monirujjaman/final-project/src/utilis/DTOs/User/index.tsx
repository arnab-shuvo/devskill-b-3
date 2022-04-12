export interface UserSigninDto {
  email: string;
  password: string;
}

export interface UserSignupDto {
  email: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
}

export interface UserInfo {
  user: string;
  role: "admin" | "user";
  token: string;
  expire_at: number;
}

export interface UserBasicInfo {
  _id: object;
  role: "admin" | "user";
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  phone: string;
  password: string;
  address?: Address;
}

export interface UserAccount {
  role: "admin" | "user" | null;
  expireDate: Date | null;
  authorized: boolean;
  token: string | null;
  user: UserBasicInfo | null;
}

export interface Address {
  eolocation?: {
    lat?: string;
    long?: string;
  };
  city?: string;
  street?: string;
  number?: 0;
  zipcode?: string;
}

export interface CartProduct {
  id: string;
  quantity: number;
}

export interface Product {
  id?: string;
}
