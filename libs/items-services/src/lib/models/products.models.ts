import { Model } from './model';

export declare class ItemsModel extends Model {
  title: string;
  description: string;
  price: string;
  email: string;
  image: string;

  constructor(attrs?: ItemsModelAttrs);
}

export interface ItemsModelAttrs {
  title?: string;
  description?: string;
  price?: string;
  email?: string;
  image?: string;
}
