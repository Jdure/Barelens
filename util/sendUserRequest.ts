import React from "react"

export default async function sendRequest(reqObj: Object) {
    await fetch("api/request", {
        method: "POST",
        mode: "same-origin",
        headers: {
            "Content-Type": "application/json",
            Authentication: `Bearer ${process.env.DIRECTUS_DOCKER_TOKEN}`,
        },
        body: JSON.stringify(reqObj),
    })
}
