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

export interface Services {
    data: ServiceProps[]
}

export interface ServiceProps {
    id: number
    title: string
    cost: number
    description: string
    service_image: ServiceImage[]
}

export interface ServiceImage {
    primary_image: string
    image_collection: ImageCollection[]
}

export interface ImageCollection {
    directus_files_id: string
}

export interface UserRequest {
    name: string
    email: string
    service_type: string
    event_date: Date | string
}