export type sizeType = "weight" | "value";

export interface PostI {
    imageUrl: string;
    name: string;
    type: sizeType;
    code: number;
    maker: string;
    brand: string;
    description: string;
    price: string;
  }