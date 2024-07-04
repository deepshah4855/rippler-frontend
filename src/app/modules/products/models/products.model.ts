export interface IProduct {
  id: number;
  brand: string;
  name: string;
  size: number;
  rental: IPrice;
  retail: IPrice;
  imageName: string;
}

export interface IPrice {
  value: number;
  currency: string;
}
