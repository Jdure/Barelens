import Link from "next/link"
import React, { Key, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Lazy } from "swiper"
import "swiper/css"
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa"
import { MdEmail, MdMenu, MdClose } from "react-icons/md"
import { Images } from "../types"
import Image from "next/image"
import { useRef } from "react"
import { useEffect } from "react"

type ImageCardProps = {
    imgPath: string
    imgTitle: string
    price: string
    desc: string
    plan: string | number
}

//TODO: Add animation to hamburger menu

export default function NavBar() {
    const listStyle = "text-sm sm:text-2xl py-2 hover:underline"
    const mobileListStyle = "w-full text-center py-6 hover:opacity-90"
    const [isNavOpen, setIsNavOpen] = useState(false)

    const menuRef = useRef<HTMLDivElement>(null)
    const toggleMenu = () => {
        setIsNavOpen(!isNavOpen)
    }

    const handleClickOutside = (event: any) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsNavOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
        return () => {
            document.removeEventListener("click", handleClickOutside, true)
        }
    }, [])

    return (
        <>
            <div className="flex flex-row py-2 px-2">
                <Image
                    src="/images/Black logo - no background.svg"
                    width={50}
                    height={50}
                    alt="Bare Lens Photography"
                    className="w-24 sm:w-36 sm:mx-4"
                />
                {/* Mobile Menu Icon */}
                <div
                    ref={menuRef}
                    className="w-3/4 flex py-2 justify-end sm:hidden"
                >
                    {isNavOpen ? (
                        <MdClose
                            className="text-2xl cursor-pointer"
                            onClick={toggleMenu}
                        />
                    ) : (
                        <MdMenu
                            className="text-2xl cursor-pointer"
                            onClick={toggleMenu}
                        />
                    )}
                </div>
                {/* Desktop Menu */}
                <div className="hidden sm:w-3/4 sm:flex sm:flex-row sm:justify-evenly">
                    <Link className={listStyle} href={"/"}>
                        Home
                    </Link>
                    <Link className={listStyle} href={"/"}>
                        About
                    </Link>
                    <Link className={listStyle} href={"/services"}>
                        Services
                    </Link>
                    <Link className={listStyle} href={"/"}>
                        Contact
                    </Link>
                </div>
            </div>
            {/* Mobile Links  */}
            {isNavOpen && (
                <div className={"text-base bg-gray-50 px-3 block"}>
                    <nav className="flex flex-col text-right space-y-2 sm:hidden">
                        <Link className="w-full hover:bg-gray-100" href={"/"}>
                            Home
                        </Link>
                        <Link className="w-full hover:bg-gray-100" href={"/"}>
                            About
                        </Link>
                        <Link
                            className="w-full hover:bg-gray-100"
                            href={"/services"}
                        >
                            Services
                        </Link>
                        <Link className="w-full hover:bg-gray-100" href={"/"}>
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </>
    )
}

export function Banner() {
    return (
        <div className="flex flex-col pt-10 sm:pt-28">
            <h1 className="text-center text-6xl sm:pb-4 sm:text-9xl">
                BARE LENS
            </h1>
            <hr className="my-2 mx-auto w-80 h-0 bg-gray-100" />
            <div className="text-xs text-center sm:justify-evenly sm:text-2xl flex flex-row py-4">
                <p>Canadian Photographer</p>
                <p>Portraits, Families & Weddings</p>
                <p>Limited Liability Company LLC</p>
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
                slidesPerView={1.25}
                centeredSlides={true}
                lazy
                loop
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
            <div className="flex flex-col mb-4 sm:items-center basis-1/2">
                <h2 className="text-md leading-normal lowercase text-center sm:grow sm:mb-8 sm:text-5xl ">
                    Capturing Life&apos;s Moment,
                    <br /> One Frame at a Time
                </h2>
                <Image
                    className="rounded-sm drop-shadow-md w-3/4 mx-auto sm:max-w-min sm:px-4"
                    src={"https://source.unsplash.com/vH96q7p1sgw/720x1280"}
                    width={400}
                    height={400}
                    alt="Jane Doe"
                />
            </div>
            <div className="flex flex-col basis-1/2 items-center justify-evenly">
                <Image
                    className="rounded-sm drop-shadow-md w-4/6 mx-auto sm:max-w-min sm:px-4"
                    src={"https://source.unsplash.com/FXJRdoIhs_U/720x1280"}
                    width={300}
                    height={300}
                    alt="Portrait"
                />
                <p className="text-sm text-center sm:text-lg sm:text-left sm:leading-relaxed">
                    Photography is the perfect way to capture and preserve
                    beautiful memories. From family portraits and special
                    occasions to landscapes and wildlife, you&apos;ll be able to
                    look back on these moments for years to come. So what are
                    you waiting for? Let us capture your memories today
                </p>
                <button className="text-white text-sm w-11/12 h-max font-bold sm:w-1/2 sm:text-xl sm:py-2 sm:px-4 rounded-full bg-gray-400 hover:bg-gray-800">
                    Contact
                </button>
            </div>
        </div>
    )
}

export function Works() {
    const pictures = [
        "jbaF5N0uO0k",
        "jbiInQGY8og",
        "4Yv84VgQkRM",
        "rGHO4XSF0Qk",
    ]

    return (
        <>
            <h2 className="text-lg my-4 text-center font-body sm:text-3xl sm:my-8">
                Featured
            </h2>
            <p className="text-3xl font-headings text-center sm:text-6xl">
                Projects
            </p>
            <div className="flex flex-wrap justify-center my-6 md:my-12 md:justify-evenly 2xl:flex-nowrap">
                {pictures.map((picture: String, idx: Key) => {
                    return (
                        <div
                            key={idx}
                            className="flex flex-col items-center space-y-2 mb-6 lg:basis-1/2 lg:grow"
                        >
                            <Image
                                className="rounded-sm drop-shadow-2xl w-3/4"
                                src={`https://source.unsplash.com/${picture}/720x1280`}
                                width={400}
                                height={400}
                                alt="images"
                            />
                            <p className="text-sm">{idx} / Lorem</p>
                            <p className="text-sm sm:text-base">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit
                            </p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export function Contact() {
    return (
        <div className="flex flex-col bg-gray-100 h-36 sm:h-64">
            <div className="flex flex-col items-center space-y-6 sm:space-y-14">
                <h2 className="text-2xl sm:text-5xl pt-6 lowercase">
                    Let&apos;s capture your memories today!
                </h2>
                <div className="flex items-center gap-3">
                    <MdEmail className="text-3xl" />
                    <p className="text-xl sm:text-3xl ">Barelens@example.com</p>
                </div>
            </div>
        </div>
    )
}

export function Footer() {
    const today = new Date()
    const year = today.getFullYear()

    return (
        <footer className="bottom-0 w-full relative flex flex-row py-2 bg-gray-600 basis-1/4">
            <Image
                src="/images/White logo - no background.svg"
                width={50}
                height={50}
                alt="Bare Lens Photography"
                className="w-24 sm:w-36 sm:mx-4"
            />
            <div className="flex flex-row items-center justify-around sm:py-2 sm:px-4 basis-1/2">
                <p className="text-white text-xl sm:text-3xl">
                    <FaInstagram />
                </p>
                <p className="text-white text-xl sm:text-3xl">
                    <FaTiktok />
                </p>
                <p className="text-white text-xl sm:text-3xl">
                    <FaFacebookF />
                </p>
            </div>
            <p className="text-white text-xs sm:text-2xl text-center py-2 px-4 basis-1/4">
                &copy; {year} Bare Lens
            </p>
        </footer>
    )
}

export function ImageCard({
    imgPath,
    imgTitle,
    price,
    desc,
    plan,
}: ImageCardProps) {
    return (
        <div className="relative h-auto w-full p-3 rounded-sm drop-shadow-md md:w-1/3 hover:drop-shadow-xl hover:grayscale ">
            <Image
                src={imgPath}
                alt={imgTitle}
                className="h-full w-full object-cover rounded-sm"
                width={720}
                height={1280}
            />
            <div className="absolute inset-0 rounded-sm flex flex-col items-center justify-evenly text-transparent ease-in duration-300 hover:text-white">
                <h3 className="font-headings ">{plan}</h3>
                <p className="text-xl font-extrabold  ">{desc}</p>
                <p className="text-2xl font-extrabold">{price}</p>
            </div>
        </div>
    )
}