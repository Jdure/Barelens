import React from "react"

export default async function sendRequest(reqObj: Object) {
    await fetch("api/request", {
        method: "POST",
        mode: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reqObj),
    })
}
