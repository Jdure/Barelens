import React, { Key } from "react"

export default function Errors(props: { errors?: string[] }) {
    if (!props.errors?.length) return null
    return (
        <div className="bg-white flex flex-col items-center justify-center">
            {props.errors.map((err: string, idx: Key) => (
                <p className="text-sm text-red-500" key={idx}>
                    {err}
                </p>
            ))}
        </div>
    )
}
