import Link from "next/link"
import React, { Key } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Lazy } from "swiper"
import "swiper/css"
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
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
        <div className="flex flex-col pt-28">
            <h1 className="text-center pb-4 text-9xl">BARE LENS</h1>
            <hr className="my-2 mx-auto w-80 h-0 bg-gray-100" />
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
                    Capturing Life&apos;s Moment,
                    <br /> One Frame at a Time
                </h2>
                <Image
                    className="rounded-sm drop-shadow-md"
                    src={"https://source.unsplash.com/vH96q7p1sgw/720x1280"}
                    width={400}
                    height={400}
                    alt="Jane Doe"
                />
            </div>
            <div className="flex flex-col basis-1/2 items-center justify-evenly">
                <Image
                    className="rounded-sm drop-shadow-md"
                    src={"https://source.unsplash.com/FXJRdoIhs_U/720x1280"}
                    width={300}
                    height={300}
                    alt="Portrait"
                />
                <p className="text-lg text-left leading-relaxed">
                    Photography is the perfect way to capture and preserve
                    beautiful memories. From family portraits and special
                    occasions to landscapes and wildlife, you&apos;ll be able to
                    look back on these moments for years to come. So what are
                    you waiting for? Let us capture your memories today
                </p>
                <button className="bg-gray-400 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">
                    Contact
                </button>
            </div>
        </div>
    )
}


// FIXME: Alignment is off on large and XL screen not taking the full width of the page like the other components
//TODO: Add media queries from XL screen to LG
export function Works() {
    return (
        <>
            <h2 className="text-3xl text-center font-body my-8">Featured</h2>
            <p className="text-6xl font-headings text-center">Projects</p>
            <div className="flex my-12 flex-row justify-evenly">
                <div className="flex flex-col items-center space-y-2 mb-6">
                    <Image
                        className="rounded-sm drop-shadow-2xl"
                        src={"https://source.unsplash.com/jbaF5N0uO0k/720x1280"}
                        width={400}
                        height={400}
                        alt="images"
                    />
                    <p className="text-sm">01 / Lorem</p>
                    <p className="text-base">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-2 mb-6">
                    <Image
                        className="rounded-sm drop-shadow-2xl"
                        src={"https://source.unsplash.com/jbiInQGY8og/720x1280"}
                        width={400}
                        height={400}
                        alt="images"
                    />
                    <p className="text-sm">02 / Lorem</p>
                    <p className="text-base">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-2 mb-6">
                    <Image
                        className="rounded-sm drop-shadow-2xl"
                        src={"https://source.unsplash.com/4Yv84VgQkRM/720x1280"}
                        width={400}
                        height={400}
                        alt="images"
                    />
                    <p className="text-sm">03 / Lorem</p>
                    <p className="text-base">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-2 mb-6">
                    <Image
                        className="rounded-sm drop-shadow-2xl"
                        src={"https://source.unsplash.com/rGHO4XSF0Qk/720x1280"}
                        width={400}
                        height={400}
                        alt="images"
                    />
                    <p className="text-sm">04 / Lorem</p>
                    <p className="text-base">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit
                    </p>
                </div>
            </div>
        </>
    )
}

export function Contact() {
    return (
        <div className="flex flex-col bg-gray-100 h-64">
            <div className="flex flex-col items-center space-y-14">
                <h2 className="text-5xl pt-6 lowercase">
                    Let us capture your memories today!
                </h2>
                <div className="flex row items-center gap-3">
                    <MdEmail className="text-3xl" />
                    <p className="text-3xl ">Barelens@example.com</p>
                </div>
            </div>
        </div>
    )
}

export function Footer() {
    const today = new Date()
    const year = today.getFullYear()

    return (
        <footer className="flex flex-row py-2 bg-gray-600">
            <i className="text-white basis-1/4 py-2 px-4">Bare Lens Logo</i>
            <div className="flex flex-row py-2 px-4 basis-1/2 justify-between">
                <p className="text-white text-3xl">
                    <FaInstagram />
                </p>
                <p className="text-white text-3xl">
                    <FaTiktok />
                </p>
                <p className="text-white text-3xl">
                    <FaFacebookF />
                </p>
            </div>
            <p className="text-white text-right py-2 px-4 basis-1/4">
                &copy; {year} Bare Lens
            </p>
        </footer>
    )
}