import React from "react"
import Image from "next/image"

export default function About() {
    return (
        <>
            <h1 className="text-lg my-4 text-center font-body sm:text-3xl sm:my-8">
                Meet the artist behind the lens
            </h1>
            <p className="py-4 text-3xl font-headings text-center sm:text-5xl">
                Capturing the beauty of life&apos;s moments
            </p>
            <div className="flex flex-col pb-4 sm:pb-0 sm:py-12 sm:flex-row">
                <div className="flex flex-col items-center justify-evenly px-6 py-4 sm:basis-1/2">
                    <Image
                        src={
                            "https://source.unsplash.com//nZ2ckk2-FNA/1280x720"
                        }
                        width={1280}
                        height={720}
                        alt="profile image"
                        className="py-2 rounded-lg drop-shadow-lg"
                    />
                </div>
                <div className="flex flex-col sm:justify-center sm:basis-1/2">
                    <p className="py-2 sm:pb-8 text-3xl font-headings sm:text-4xl text-center mx-6 sm:text-justify">
                        Hi, I&apos;m Beta!
                    </p>
                    <p className="text-center leading-relaxed break-words mx-6 sm:text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea quaerat tempore repudiandae aliquam expedita! Vero
                        iure voluptatibus aliquam nulla corporis dicta
                        aspernatur praesentium neque animi! Ducimus harum in sit
                        beatae!
                    </p>
                    <div className="flex flex-row items-center justify-start mx-6 pt-4 sm:pt-8 ">
                        <p className="text-center leading-relaxed break-words sm:text-justify">
                            View my most recent projects on{" "}
                            <a href="#" className="font-bold">
                                Instagram
                            </a>{" "}
                            !
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
