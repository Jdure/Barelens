import React from "react"
import Image from "next/image"

export default function ContactPage() {
    return (
        <>
            <h1 className="text-lg my-4 text-center font-body sm:text-3xl sm:my-8">
                Let&apos;s work together
            </h1>
            <p className="py-4 mx-2 text-2xl font-headings text-center sm:text-5xl">
                Connect with us and bring your vision to life
            </p>
            <div className="flex flex-col">
                <div className="flex flex-col basis-1/2 items-center justify-center">
                    <Image
                        src={
                            "https://source.unsplash.com//Zf14BckA1JA/1280x720"
                        }
                        width={720}
                        height={1280}
                        alt="contact image"
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col basis-1/2">Contact</div>
            </div>
        </>
    )
}
