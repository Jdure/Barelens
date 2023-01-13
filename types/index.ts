export interface Images {
    data: ImgProps[]
}

export interface ImgProps {
    id: number
    title: string
    caption: string
    description: string
    section_images: SectionImage[]
}

export interface SectionImage {
    primary_image: null | string
    image_collection: ImageCollection[]
}

export interface ImageCollection {
    directus_files_id: string
}