import React from "react"
import { createClient, Entry, EntryCollection } from "contentful"

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
})

export default async function getEntriesByType<T>(type: String) {
    const response = await client.getEntries({ content_type: type })
    return response.items.map((entry: Entry<unknown>) => {
        const result = entry.fields
        return result
    })
}
