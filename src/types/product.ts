export type ImageType = {
  id: number;
  source: string;
  status: "M" | "A";
};

export type CategoryType = {
  id: number;
  name_uz: string;
  name_ru: string;
  image: string;
  status: "M" | "A";
  childrens?: CategoryType[];
  products?: ProductListType[];
};

export type ProductDetailType = {
  id: number;
  name_uz: string;
  name_ru: string;
  description_uz: string;
  description_ru: string;
  price: number;
  price_type: string;
  images: ImageType[];
  category: CategoryType;
  in_stock: boolean;
};

export type ProductListType = {
  id: number;
  name_uz: string;
  name_ru: string;
  price: number;
  price_type: string;
  image: string;
};
