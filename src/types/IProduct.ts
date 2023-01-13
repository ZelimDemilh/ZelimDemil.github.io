export type sizes = {
  height: string;
  width: string;
};

export interface IProduct {
  _id: string,
  image: string,
  name: string,
  category: string,
  description: string,
  retailPrice: number,
  wholesalePrice: number,
  discount: number,
  sizes: sizes[],
}