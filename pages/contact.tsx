import React from "react"
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md"
import { FaInstagram } from "react-icons/fa"
import { Form } from "../components"

export default function ContactPage() {
    return (
        <>
            <h1 className="text-lg my-4 text-center font-body sm:text-3xl sm:my-8">
                Let&apos;s work together
            </h1>
            <p className="py-3 text-xl font-headings text-center sm:text-6xl">
                Connect with us and bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row pt-2 sm:pt-12 sm:h-fit">
                <div className="flex flex-col bg-gray-100 items-center py-6 sm:basis-1/2">
                    <h2 className="text-xl text-black py-1 sm:text-4xl">
                        Contact Information
                    </h2>
                    <p className="text-base text-black py-1 sm:text-xl sm:text-center sm:py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                    <div className="flex flex-col justify-between pt-4 pb-4 space-y-4 sm:space-y-8">
                        <div className="flex flex-row items-center">
                            <FaInstagram className="text-black text-lg sm:text-xl" />
                            <p className="text-lg px-2 sm:text-2xl">
                                @barelensphotography
                            </p>
                        </div>
                        <div className="flex flex-row items-center">
                            <MdOutlineEmail className="text-black text-lg sm:text-xl" />
                            <p className="text-lg px-2 sm:text-2xl">
                                <a href="mailto:barelens@example.com">
                                    barelens@example.com
                                </a>
                            </p>
                        </div>
                        <div className="flex flex-row items-center">
                            <MdOutlineLocationOn className="text-black text-lg sm:text-xl" />
                            <p className="text-lg px-2 sm:text-2xl">
                                Ottawa, Canada
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex h-full w-full grayscale sm:basis-1/2">
                    <Form />
                </div>
            </div>
        </>
    )
}