export interface ICategory {
  _id: string;
  name: string;
  image: string;
}

export type addCategory = {
  name: string;
  image: File
}
