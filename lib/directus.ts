import { Directus } from "@directus/sdk"

const email = process.env.DIRECTUS_EMAIL || ""
const password = process.env.DIRECTUS_PASSWORD || ""
const token = process.env.DIRECTUS_TOKEN || ""
const directus = new Directus(process.env.DIRECTUS_URL || "")

export async function getDirectusClient() {
    if (email && password) {
        await directus.auth.login({ email, password })
    } else if (token) {
        await directus.auth.static(token)
    }

    return directus
}
