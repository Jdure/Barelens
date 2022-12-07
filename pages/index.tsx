import React, { Key } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import NavBar, { Banner } from "../components"

interface Images {
  id: string;
  title: string;
  image: string;
  width: Number | undefined;
  height: Number | undefined;
  created_at: Date;
}

export default function App(props: { images: Images[] }) {
    return (
        <div>
            <NavBar />
            <Banner />
            {props.images.map((item: Images, idx: Key) => {
                return (
                    <>
                        <p key={idx}>{item.title}</p>
                        <Image
                            width={500}
                            height={500}
                            alt={item.title}
                            src={item.image}
                        />
                    </>
                )
            })}
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(
        `https://${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                expression: `folder=test`,
            }),
        }
    )
    const { resources } = await res.json()

    const images: Images[] = resources.map(
        (value: {
            public_id: string
            filename: string
            secure_url: string
            width: Number
            height: Number
            created_at: Date
        }) => {
            const { created_at, width, height } = value
            return {
                id: value.public_id,
                title: value.filename,
                image: value.secure_url,
                created_at,
                width,
                height,
            }
        }
    )

    return {
        props: {
            images,
        },
    }
}
