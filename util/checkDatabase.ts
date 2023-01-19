import React from "react"
import { getDirectusClient } from "../lib/directus"

export default async function checkDatabase() {
    const directus = await getDirectusClient()

    const requests = await directus.items("request").readByQuery({
        fields: ["event_date"],
    })

    // Filter the database
    //If the date return error message that date is taken
}
