import React from "react"
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md"
import { FaInstagram } from "react-icons/fa"
import dynamic from "next/dynamic"
import Link from "next/link"
import { GetStaticProps } from "next"
import { getDirectusClient } from "../lib/directus"

const Form = dynamic(
    () => import("../components/Form").then((module) => module.Form),
    {
        ssr: true,
    }
)

type currSessionProps = {
    currSessions: Date[]
}

export default function ContactPage({ currSessions }: currSessionProps) {
    return (
        <>
            <div className="flex flex-col py-6 mb-6 px-6">
                <h1 className="text-lg my-4 text-center font-body sm:text-3xl sm:my-8">
                    Let&apos;s work together
                </h1>
                <p className="py-3 text-xl font-headings text-center sm:text-6xl">
                    Connect with us and bring your vision to life
                </p>
            </div>
            <div className="flex flex-col sm:flex-row pt-2 sm:pt-12 sm:h-full xl:h-screen">
                <div className="flex flex-col bg-[#FFF6EA] items-center py-6 sm:basis-1/2">
                    <h2 className="text-xl text-stone-800 py-1 sm:text-4xl">
                        Contact Information
                    </h2>
                    <p className="text-base text-stone-800 py-1 sm:text-xl sm:text-center sm:py-4">
                        Here&apos;s where you can find us
                    </p>
                    <div className="flex flex-col justify-between pt-4 pb-4 space-y-4 sm:space-y-8">
                        <div className="flex flex-row items-center">
                            <FaInstagram className="text-stone-800 text-lg sm:text-xl" />
                            <Link
                                className="text-lg px-2 sm:text-2xl"
                                href="https://www.instagram.com/barelensphotos/"
                            >
                                @barelensphotos
                            </Link>
                        </div>
                        <div className="flex flex-row items-center">
                            <MdOutlineEmail className="text-stone-800 text-lg sm:text-xl" />
                            <Link
                                className="text-lg px-2 sm:text-2xl"
                                href="mailto:barelensphotos@gmail.com"
                            >
                                barelensphotos@gmail.com
                            </Link>
                        </div>
                        <div className="flex flex-row items-center">
                            <MdOutlineLocationOn className="text-stone-800 text-lg sm:text-xl" />
                            <p className="text-lg px-2 sm:text-2xl">
                                Ottawa, Canada
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex h-full w-full sm:basis-1/2">
                    <Form currSessions={currSessions} />
                </div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const directus = await getDirectusClient()
    const response = await directus.items("request").readByQuery({
        fields: ["event_date_time"],
    })

    const currSessions = response.data?.map((item) => item.event_date_time)
    return {
        props: {
            currSessions,
        },
    }
}