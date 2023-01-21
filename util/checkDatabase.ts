import React from "react"
import { getDirectusClient } from "../lib/directus"

export default async function checkDate(inputDate: string | Date) {
    const directus = await getDirectusClient()

    const event = await directus.items("request").readByQuery({
        fields: ["event_date"],
    })

    return event.data?.filter((item: any) => item.event_date === inputDate)
        ? true
        : false
}
