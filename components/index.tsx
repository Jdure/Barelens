import React, { useState } from "react"
import Image from "next/image"
import { useRef } from "react"

type ImageCardProps = {
    imgPath: string | null
    imgTitle: string
    price: string
    desc: string
    plan: string | number
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
