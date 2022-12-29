import { GetStaticProps, InferGetStaticPropsType } from "next"
import React, { Key } from "react"
import { ImageCard } from "../components"
import { IServices, IServicesFields } from "../types/contentful"
import getEntriesByType from "../utils/helpers"

interface ServicePageProps {
    services: IServicesFields[]
}

export default function ServicesPage({ services }: ServicePageProps) {
    return (
        <>
            <div className="flex flex-col py-6 mb-6 px-6">
                <h1 className="text-lg my-4 text-center font-body sm:text-3xl sm:my-8">
                    Memories to last a lifetime
                </h1>
                <p className="py-3 text-xl font-headings text-center sm:text-6xl">
                    Services & Rates
                </p>
                <div className="flex flex-wrap-reverse">
                    {services.map((field: IServicesFields, idx: Key) => (
                        <ImageCard
                            key={idx}
                            imgPath={
                                "https:" + field.thumbnail?.fields.file.url
                            }
                            imgTitle={field.title}
                            plan={field.title}
                            desc={field.description}
                            price={field.cost.toString() + "$"}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const services = await getEntriesByType<IServicesFields>("services")

    return {
        props: {
            services,
        },
    }
}
