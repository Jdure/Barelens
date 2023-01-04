export interface Images {
    data: Img[]
}

export interface Img {
    id: number
    title: string
    cover_image: string
    description: string
    caption: string
    gallery: Gallery[]
}

export interface Gallery {
    directus_files_id: string
}
