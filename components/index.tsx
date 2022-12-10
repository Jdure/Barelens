import Link from "next/link"
import React, { Key } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Lazy } from "swiper"
import "swiper/css"
import { Images } from "../types"
import Image from "next/image"

export default function NavBar() {
    const listStyle = "py-2 px-4 hover:underline"

    return (
        <div className="flex flex-row py-2">
            <i className="flex-grow py-2 px-4">Bare Lens Logo</i>
            <div className="flex flex-row gap-20">
                <Link className={listStyle} href={"/"}>
                    Home
                </Link>
                <Link className="py-2 px-4 hover:underline" href={"/"}>
                    About
                </Link>
                <Link className="py-2 px-4 hover:underline" href={"/"}>
                    Gallery
                </Link>
                <Link className="py-2 px-4 hover:underline" href={"/"}>
                    Contact
                </Link>
            </div>
        </div>
    )
}

export function Banner() {
    return (
        <div className="flex flex-col pt-28 divide-y">
            <h1 className="text-center pb-4 text-9xl">BARE LENS</h1>
            <div className="flex flex-row justify-evenly py-4">
                <p>Canadian Photographer</p>
                <p>Portraits, Families & Weddings</p>
                <p>2022, Limited Liability Company LLC</p>
            </div>
        </div>
    )
}

export function Carousel({ data }: any) {
    return (
        <div className="container my-8 mx-auto">
            <Swiper
                modules={[EffectCards, Lazy]}
                spaceBetween={15}
                slidesPerView={1.5}
                centeredSlides={true}
                lazy
                loop
                effect="cards"
            >
                {data.map((value: Images, idx: Key) => {
                    return (
                        <SwiperSlide key={idx}>
                            <Image
                                width={1280}
                                height={720}
                                key={idx}
                                alt={value.title}
                                src={value.image}
                                style={{
                                    objectFit: "contain",
                                }}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export function About() {
    return (
        <div className="flex flex-row mt-12 bg-gray-100">
            <div className="flex flex-col mb-4 items-center basis-1/2">
                <h2 className="grow mb-8 text-5xl leading-normal lowercase">
                    Capturing Life's Moment,
                    <br /> One Frame at a Time
                </h2>
                <Image
                    className="rounded-sm"
                    src={"https://source.unsplash.com/vH96q7p1sgw/720x1280"}
                    width={400}
                    height={400}
                    alt="Jane Doe"
                />
            </div>
            <div className="flex flex-col basis-1/2 items-center justify-evenly">
                <Image
                    className="rounded-sm"
                    src={"https://source.unsplash.com/FXJRdoIhs_U/720x1280"}
                    width={300}
                    height={300}
                    alt="Portrait"
                />
                <p className="text-lg text-left leading-relaxed">
                    Photography is the perfect way to capture and preserve
                    beautiful memories. From family portraits and special
                    occasions to landscapes and wildlife, you'll be able to look
                    back on these moments for years to come. So what are you
                    waiting for? Let us capture your memories today
                </p>
                <button className="bg-gray-400 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">
                    Contact
                </button>
            </div>
        </div>
    )
}

export function Works() {
    return (
        <div className="container">
            <h2 className="text-3xl text-center font-body my-8">Featured</h2>
            <p className="text-6xl font-headings text-center">Projects</p>
            <div className="flex my-12 flex-row flex-wrap">
                <div className="flex flex-col basis-1/2 items-center mb-6">
                    <Image
                        className="rounded-sm drop-shadow-2xl"
                        src={"https://source.unsplash.com/jbaF5N0uO0k/720x1280"}
                        width={400}
                        height={400}
                        alt="images"
                    />
                    <p className="text-sm ">01 / Lorem</p>
                    <p className="text-base">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </p>
                </div>
                <div className="flex flex-col basis-1/2 items-center mb-6">
                    <Image
                        className="rounded-sm drop-shadow-2xl"
                        src={"https://source.unsplash.com/jbiInQGY8og/720x1280"}
                        width={400}
                        height={400}
                        alt="images"
                    />
                    <p className="text-sm">02 / Lorem</p>
                    <p className="text-base">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </p>
                </div>
                <div className="flex flex-col basis-1/2 items-center mb-6">
                    <Image
                        className="rounded-sm drop-shadow-2xl"
                        src={"https://source.unsplash.com/4Yv84VgQkRM/720x1280"}
                        width={400}
                        height={400}
                        alt="images"
                    />
                    <p className="text-sm">03 / Lorem</p>
                    <p className="text-base">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </p>
                </div>
                <div className="flex flex-col basis-1/2 items-center mb-6">
                    <Image
                        className="rounded-sm drop-shadow-2xl"
                        src={"https://source.unsplash.com/rGHO4XSF0Qk/720x1280"}
                        width={400}
                        height={400}
                        alt="images"
                    />
                    <p className="text-sm">04 / Lorem</p>
                    <p className="text-base">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </p>
                </div>
            </div>
        </div>
    )
}