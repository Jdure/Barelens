import React, { ReactNode } from "react"

export const Tooltip = ({
    msg,
    children,
}: {
    msg: string
    children: ReactNode
}) => {
    return (
        <div className="group relative flex">
            {children}
            <span className="absolute bottom-0 right-0 scale-0 transition-all duration-200 ease-in-out rounded bg-stone-800 p-2 text-white text-base group-hover:scale-100">
                {msg}
            </span>
        </div>
    )
}
