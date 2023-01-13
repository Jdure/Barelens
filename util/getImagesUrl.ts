import React from "react"
import getConfig from "next/config"
import { getDirectusClient } from "../lib/directus"

const { publicRuntimeConfig } = getConfig()
const { url } = publicRuntimeConfig

export default function getImageUrl(id: string) {
    if (!id) return null
    return `http://${url}/assets/${id}`
}