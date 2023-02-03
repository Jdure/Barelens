import { NextApiRequest, NextApiResponse } from "next"

// TODO: Revalidate dynamically - Should be able to revalidate [home, service and about]
// TODO: deploy site to host to test revalidation properly

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
        return res.status(401).json({ message: "Invalid token" })
    }

    try {
        console.log(req.query)
        await res.revalidate("/services")
        return res.json({ revalidated: true })
    } catch (err) {
        return res.status(500).send("Error revalidating")
    }
}
