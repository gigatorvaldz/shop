export type sizeType = "weight" | "value";

export interface PostI {
    url: string;
    name: string;
    type: sizeType;
    code: number;
    maker: string;
    brand: string;
    description: string;
    price: string;
  }