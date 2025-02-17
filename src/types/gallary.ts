export type GallaryImageType = {
    id: string;
    source: string;
}

export type GallaryType = {
    id: string;
    name_uz: string;
    name_ru: string;
    description_uz: string;
    description_ru: string;
    images: GallaryImageType[];
}
