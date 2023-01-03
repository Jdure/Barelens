import React from "react"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()
const { url } = publicRuntimeConfig

export default function getImageUrl(id: string) {
    if (!id) return null
    return `https://${url}/assets/${id}`
}
