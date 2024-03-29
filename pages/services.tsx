import { GetStaticProps } from "next"
import React from "react"
import { ServiceProps } from "../types"
import { getDirectusClient } from "../lib/directus"
import getImageUrl from "../util/getImagesUrl"
import dynamic from "next/dynamic"

type ServicesPageProps = {
    services: ServiceProps[]
}

const ImageCard = dynamic(
    () => import("../components/ImageCard").then((module) => module.ImageCard),
    {
        ssr: false,
    }
)

export default function ServicesPage({ services }: ServicesPageProps) {
    return (
        <>
            <div className="flex flex-col py-6 mb-6 px-6">
                <h1 className="text-lg my-4 text-center font-body sm:text-3xl sm:my-8">
                    Memories to last a lifetime
                </h1>
                <p className="py-3 text-xl font-headings text-center sm:text-6xl">
                    Services & Rates
                </p>
                <div className="flex flex-wrap sm:w-4/5 mx-auto">
                    {services.map((service: ServiceProps) => (
                        <ImageCard
                            key={service.id}
                            imgPath={getImageUrl(
                                service.service_image[0]
                                    .primary_image as string,
                                "default"
                            )}
                            imgTitle={service.title}
                            plan={service.title}
                            desc={service.description}
                            price={service.cost.toString() + "$"}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const directus = await getDirectusClient()
    const response = await directus.items("services").readByQuery({
        fields: [
            "id",
            "title",
            "cost",
            "description",
            "service_image.primary_image",
            "service_image.image_collection.directus_files_id",
        ],
    })
    return {
        props: {
            services: response.data,
        },
    }
}
