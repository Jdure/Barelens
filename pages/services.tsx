import { GetStaticProps } from "next"
import React from "react"
import { ImageCard } from "../components"
import { Images } from "../types"
import { getDirectusClient } from "../lib/directus"

type Services = {
    id: number
    title: string
    description: string
    cost: number
    cover_image: string
}

type ServicesPageProps = {
    services: Services[]
}

export default function ServicesPage({ services }: ServicesPageProps) {
    const allServices = services
    console.log(allServices)
    return (
        <>
            <div className="flex flex-col py-6 mb-6 px-6">
                <h1 className="text-lg my-4 text-center font-body sm:text-3xl sm:my-8">
                    Memories to last a lifetime
                </h1>
                <p className="py-3 text-xl font-headings text-center sm:text-6xl">
                    Services & Rates
                </p>
                <div className="flex flex-wrap">
                    <ImageCard
                        imgPath="https://source.unsplash.com/BOHyxqepP9Y/720x1280"
                        imgTitle="img"
                        plan="Headshot"
                        desc="10 to 20 digitally edited images"
                        price="300$"
                    />
                    <ImageCard
                        imgPath="https://source.unsplash.com/Iz1ae_tdK6k/720x1280"
                        imgTitle="img"
                        plan="Couples"
                        desc="10 to 20 digitally edited images"
                        price="300$"
                    />
                    <ImageCard
                        imgPath="https://source.unsplash.com/yj4kwA4h_Ms/720x1280"
                        imgTitle="img"
                        plan="Engagement"
                        desc="30 to 50 digitally edited images"
                        price="500$"
                    />
                    <ImageCard
                        imgPath="https://source.unsplash.com/Za03n9MIt4s/720x1280"
                        imgTitle="img"
                        plan="Families"
                        desc="50 to 60 digitally edited images"
                        price="500$"
                    />
                    <ImageCard
                        imgPath="https://source.unsplash.com/rsGdX91zqiU/720x1280"
                        imgTitle="img"
                        plan="Maternity"
                        desc="50 to 60 digitally edited images"
                        price="600$"
                    />
                    <ImageCard
                        imgPath="https://source.unsplash.com/p76UivR30oo/720x1280"
                        imgTitle="img"
                        plan="Newborn"
                        desc="50 to 60 digitally edited images"
                        price="600$"
                    />
                </div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const directus = await getDirectusClient()
    const services = await directus.items("Services").readByQuery({ limit: -1 })
    return {
        props: {
            services,
        },
    }
}
