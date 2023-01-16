import React, { Key } from "react"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Lazy } from "swiper"
import Image from "next/image"
import { ImageCollection, Images, ImgProps } from "../types"
import getImageUrl from "../util/getImagesUrl"

export function Carousel({ data }: Images) {
    const [{ title, section_images }] = data
    return (
        <div className="container my-8 mx-auto">
            <Swiper
                modules={[EffectCards, Lazy]}
                spaceBetween={15}
                slidesPerView={1.25}
                centeredSlides={true}
                loop
                lazy
                effect="cards"
                breakpoints={{
                    320: {
                        slidesPerView: 1.1,
                        centeredSlides: true,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 1.25,
                        centeredSlides: true,
                        spaceBetween: 15,
                    },
                }}
            >
                {section_images[0].image_collection.map(
                    (value: ImageCollection, idx: Key) => {
                        return (
                            <SwiperSlide key={idx}>
                                <Image
                                    width={1280}
                                    height={720}
                                    key={idx}
                                    alt={title}
                                    src={
                                        getImageUrl(
                                            value.directus_files_id,
                                            "carousel-images"
                                        ) || ""
                                    }
                                    style={{
                                        objectFit: "contain",
                                    }}
                                    blurDataURL="URL"
                                    placeholder="blur"
                                />
                            </SwiperSlide>
                        )
                    }
                )}
            </Swiper>
        </div>
    )
}
