import Link from "next/link"
import React, { Key } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Pagination, Lazy } from "swiper"
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

// FIXME: Pagination Icons not displaying with Card effect

export function Carousel({ data }: any) {
    return (
        <div className="container mt-5 mx-auto">
            <Swiper
                modules={[EffectCards, Lazy, Pagination]}
                spaceBetween={15}
                slidesPerView={1.5}
                centeredSlides={true}
                loop
                lazy={true}
                pagination={true}
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
