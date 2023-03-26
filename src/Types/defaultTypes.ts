export type sizeType = "weight" | "volume";

export interface PostI {
  imageUrl: string;
  name: string;
  type: sizeType;
  code: number;
  maker: string;
  brand: string;
  description: string;
  price: string;
  tags: Array<string>;
}