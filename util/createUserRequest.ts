import React from "react"
import { getDirectusClient } from "../lib/directus"

export default async function addUserRequest(
    userName: string,
    userEmail: string,
    userService: string,
    userDate: string
) {
    const directus = await getDirectusClient()

    const requests = directus.items("request")

    await requests.createOne({
        name: userName,
        email: userEmail,
        service_type: userService,
        event_date_time: userDate,
        status: "New",
    })
}
