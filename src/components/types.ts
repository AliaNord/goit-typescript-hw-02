export type Gallery = GalleryItem[]

export type GalleryItem = {
    id: string;
    urls: Urls;
    slug: string;
}

export type Urls = {
    small: string;
    regular: string;
}

export type PictureResponse = {
    results: Gallery;
    total_pages: number;
}