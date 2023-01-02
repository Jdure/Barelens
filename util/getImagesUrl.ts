import React from "react"

const url = process.env.DIRECTUS_URL || ""

export default function getImageUrl(id: string) {
    if (!id) return null
    return `${url}/assets/${id}`
}
