import Link from "next/link"
import React, { Key, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Lazy } from "swiper"
import "swiper/css"
import {
    TbBrandInstagram,
    TbBrandTiktok,
    TbBrandFacebook,
} from "react-icons/tb"
import { MdOutlineEmail, MdMenu, MdClose } from "react-icons/md"
import { ImageCollection, Images, ImgProps } from "../types"
import Image from "next/image"
import { useRef } from "react"
import { useEffect } from "react"
import getImageUrl from "../util/getImagesUrl"

type ImageCardProps = {
    imgPath: string | null
    imgTitle: string
    price: string
    desc: string
    plan: string | number
}

export default function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const listStyle = "text-sm sm:text-2xl py-2 hover:underline"
    const mobileListStyle = "w-full hover:bg-gray-100"

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
                <div className="hidden sm:items-center sm:w-3/4 sm:flex sm:flex-row sm:justify-evenly">
                    <Link className={listStyle} href={"/"}>
                        Home
                    </Link>
                    <Link className={listStyle} href={"/about"}>
                        About
                    </Link>
                    <Link className={listStyle} href={"/services"}>
                        Services
                    </Link>
                    <Link className={listStyle} href={"/contact"}>
                        Contact
                    </Link>
                </div>
            </div>
            {/* Mobile Links  */}
            <div
                className={`text-base bg-gray-50 px-3 overflow-hidden transition-all ease-out duration-150 sm:hidden sm:transition-none ${
                    isNavOpen ? "h-32" : "h-0"
                }`}
            >
                <nav
                    className={`flex flex-col text-right space-y-2 duration-300 ease-out sm:hidden sm:transition-none`}
                >
                    <Link className={mobileListStyle} href={"/"}>
                        Home
                    </Link>

                    <Link className={mobileListStyle} href={"/about"}>
                        About
                    </Link>

                    <Link className={mobileListStyle} href={"/services"}>
                        Services
                    </Link>
                    <Link className={mobileListStyle} href={"/contact"}>
                        Contact
                    </Link>
                </nav>
            </div>
        </>
    )
}

export function Banner() {
    return (
        <div className="flex flex-col pt-10 sm:pt-28">
            <Image
                src="/images/Black logo - no background.svg"
                width={50}
                height={50}
                alt="Bare Lens Photography Logo"
                className="w-2/3 mx-auto text-6xl sm:pb-4"
            />
            <hr className="my-2 mx-auto w-80 h-0 bg-gray-100" />
            <div className="text-xs text-center sm:justify-evenly sm:text-2xl flex flex-row py-4">
                <p>Canadian Photographer</p>
                <p>Portraits, Families & Weddings</p>
                <p>Limited Liability Company LLC</p>
            </div>
        </div>
    )
}

export function Carousel({ data }: Images) {
    const [{ title, section_images }] = data
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
                                        getImageUrl(value.directus_files_id) ||
                                        ""
                                    }
                                    style={{
                                        objectFit: "contain",
                                    }}
                                />
                            </SwiperSlide>
                        )
                    }
                )}
            </Swiper>
        </div>
    )
}

export function About({ data }: Images) {
    const [{ section_images }] = data
    const [imgOne, imgTwo] = section_images[0].image_collection

    return (
        <div className="flex flex-row mt-12 py-4 bg-gray-100">
            <div className="flex flex-col mb-4 sm:items-center basis-1/2">
                <h2 className="text-md leading-normal lowercase text-center text-2xl sm:grow sm:mb-8 sm:text-5xl ">
                    Capturing Life&apos;s Moment,
                    <br /> One Frame at a Time
                </h2>
                <Image
                    className="rounded-sm drop-shadow-md w-3/4 mx-auto sm:max-w-min sm:px-4"
                    src={getImageUrl(imgOne.directus_files_id) || ""}
                    width={400}
                    height={400}
                    alt="Picture of Beta M"
                />
            </div>
            <div className="flex flex-col basis-1/2 items-center justify-between">
                <Image
                    className="rounded-sm drop-shadow-md w-3/5 mx-auto sm:max-w-min sm:px-4"
                    src={getImageUrl(imgTwo.directus_files_id) || ""}
                    width={300}
                    height={300}
                    alt="Beta taking a picture"
                />
                <p className="text-sm text-center sm:text-lg sm:text-justify sm:leading-relaxed sm:mx-4">
                    Photography is the perfect way to capture and preserve
                    beautiful memories. From family portraits to special
                    occasions, you&apos;ll be able to look back on these moments
                    for years to come. So what are you waiting for?{" "}
                </p>
                <p className="text-sm text-center sm:text-lg sm:leading-relaxed sm:mx-auto">
                    Let&apos;s capture your memories today!
                </p>
                <button className="text-white text-sm w-11/12 h-max font-bold sm:w-1/2 sm:text-xl sm:py-2 sm:px-4 rounded-full bg-gray-400 hover:bg-gray-800">
                    <Link href={"/contact"}>Contact</Link>
                </button>
            </div>
        </div>
    )
}

export function Works({ data }: Images) {
    const [values] = data

    return (
        <>
            <h2 className="text-lg my-4 text-center font-body sm:text-3xl sm:my-8">
                Featured
            </h2>
            <p className="text-2xl font-headings text-center sm:text-6xl">
                Projects
            </p>
            <div className="flex flex-wrap justify-center my-6 md:my-12 md:justify-evenly 2xl:flex-nowrap">
                {data.map((value: ImgProps, idx: Key) => {
                    return (
                        <div
                            key={idx}
                            className="flex flex-col items-center space-y-2 mb-6 lg:basis-1/2 lg:grow"
                        >
                            <Image
                                className="rounded-sm drop-shadow-2xl w-3/4"
                                src={
                                    getImageUrl(
                                        value.section_images[0]
                                            .primary_image as string
                                    ) || ""
                                }
                                width={400}
                                height={400}
                                alt="images"
                            />
                            <p className="text-sm capitalize">{value.title}</p>
                            <p className="text-sm sm:text-base capitalize">
                                {value.caption}
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
                <h2 className="text-xl sm:text-5xl pt-6 lowercase">
                    Let&apos;s capture your memories today!
                </h2>
                <div className="flex items-center space-x-2">
                    <MdOutlineEmail className="text-xl sm:text-3xl" />
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
        <footer className="bottom-0 w-full relative flex py-2 bg-gray-600">
            <div className="basis-1/4">
                <Image
                    src="/images/White logo - no background.svg"
                    width={50}
                    height={50}
                    alt="Bare Lens Photography"
                    className="w-auto pl-1 sm:w-36 sm:mx-4"
                />
            </div>
            <div className="flex items-center justify-around sm:justify-between sm:py-2 sm:px-4 basis-1/2">
                <TbBrandInstagram className="text-white text-xl sm:text-3xl" />

                <TbBrandTiktok className="text-white text-xl sm:text-3xl" />

                <TbBrandFacebook className="text-white text-xl sm:text-3xl" />
            </div>
            <p className="text-white text-xs text-center  py-2 px-4 basis-1/4 sm:text-2xl sm:text-right">
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
        <div className="relative h-auto w-full p-3 rounded-sm drop-shadow-md md:w-1/3 hover:drop-shadow-xl">
            <Image
                src={imgPath || ""}
                alt={imgTitle}
                className="h-full w-full object-cover rounded-sm"
                width={720}
                height={1280}
            />
            <div className="absolute inset-0 m-3 rounded-sm flex flex-col items-center justify-around text-transparent ease-in duration-300 sm:m-0 sm:inset-4 hover:text-white hover:backdrop-brightness-50">
                <h3 className="font-headings capitalize">{plan}</h3>
                <p className="text-base text-center font-extrabold sm:text-xl">
                    {desc}
                </p>
                <p className="text-2xl font-extrabold">{price}</p>
            </div>
        </div>
    )
}

export function Form() {
    const date = new Date()
    const defaultDate = date.toLocaleDateString("en-CA")
    const formRef = useRef<HTMLFormElement>(null)
    const [submitted, setSubmitted] = useState(false)
    const [values, setValues] = useState({
        name: "",
        email: "",
        service: "",
        eventDate: defaultDate,
    })

    const handleChange = (
        evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        evt.persist()
        const value = evt.target.value
        setValues((values) => ({
            ...values,
            [evt.target.name]: value,
        }))
    }

    const handleReset = () => {
        setValues({
            name: "",
            email: "",
            service: "",
            eventDate: defaultDate,
        })
    }

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        setSubmitted(true)

        console.log(values)

        if (formRef.current) {
            formRef.current?.reset()
            handleReset()
        }

        setTimeout(() => {
            setSubmitted(false)
        }, 3000)
    }

    return (
        <div id="contact-form" className="container">
            {submitted ? (
                <div className="absolute items-center bg-white leading-none rounded p-2 shadow text-black text-sm">
                    <span className="inline-flex bg-gray-700 text-white rounded-full h-6 px-3 justify-center items-center my-2 sm:my-2">
                        Thanks!
                    </span>
                    <span className="inline-flex px-2 text-gray-700">
                        We will contact you shortly to confirm your session!
                    </span>
                </div>
            ) : null}
            <div className="bg-white rounded-md p-8 flex flex-col items-center justify-center">
                <h2 className="text-xl text-black py-1 sm:text-4xl mb-4">
                    Book A Session
                </h2>
                <p className="leading-relaxed mb-3 text-black text-sm sm:text-xl">
                    Lorem ipsum, dolor sit amet consectetur elit
                </p>
                <form
                    ref={formRef}
                    className="w-full min-h-fit flex flex-col items-center justify-between space-y-4 sm:space-y-6 sm:pt-4"
                    onSubmit={handleSubmit}
                >
                    <input
                        required
                        className="my-2 text-lg appearance-none bg-transparent border-b border-gray-400 w-3/4 text-black leading-none focus:outline-none"
                        type="text"
                        placeholder="Your name"
                        aria-label="Full name"
                        name="name"
                        defaultValue={values.name}
                        onChange={handleChange}
                    />
                    <input
                        pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                        required
                        className="my-2 text-lg appearance-none bg-transparent border-b border-gray-400 w-3/4 text-black leading-none focus:outline-none"
                        type="email"
                        name="email"
                        placeholder="E-mail address"
                        aria-label="E-mail address"
                        defaultValue={values.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="occasionTypes" className="text-lg">
                        Choose service
                    </label>

                    <select
                        name="service"
                        id="serviceTypes"
                        defaultValue={values.service}
                        onChange={handleChange}
                        required
                        className="text-lg text-black relative w-3/4 bg-white border border-gray-300 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select Service</option>
                        <option value="portrait">Portrait</option>
                        <option value="couple">Couple</option>
                        <option value="engagement">Engagement</option>
                        <option value="wedding">Wedding</option>
                        <option value="family">Family</option>
                        <option value="maternity">Maternity</option>
                        <option value="newborn">Newborn</option>
                    </select>

                    <label htmlFor="eventDate" className="text-lg">
                        Select date
                    </label>
                    <input
                        disabled={submitted}
                        className="text-lg appearance-none bg-transparent border-b border-gray-400 w-3/4 text-black leading-none focus:outline-none"
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        onChange={handleChange}
                        defaultValue={values.eventDate}
                    ></input>

                    <button
                        type="submit"
                        className="text-white text-sm w-1/2 h-max font-bold sm:w-1/2 sm:text-xl rounded-full bg-gray-400 hover:bg-gray-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}