import React from "react"
import getConfig from "next/config"
import { getDirectusClient } from "../lib/directus"

const { publicRuntimeConfig } = getConfig()
const { url } = publicRuntimeConfig

export default function getImageUrl(id: string, key: string) {
    if (!id) return null
    return `https://${url}/assets/${id}?key=${key}`
}