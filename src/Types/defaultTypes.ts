export type sizeType = "weight" | "volume";

export interface PostI {
  imageUrl: string;
  name: string;
  type: sizeType;
  code: number;
  maker: string;
  brand: string;
  description: string;
  price: number;
  tags: Array<string>;
}

export type readableKeysPostI = "maker";

export interface cartItemI {
  code: number;
  quantity: number;
}

