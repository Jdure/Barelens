import { NextApiRequest, NextApiResponse } from "next"

// TODO: Revalidate dynamically - Should be able to revalidate [home, service and about]

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
        return res.status(401).json({ message: "Invalid token" })
    }

    try {
        await res.revalidate(req.query.path as string)
        return res.json({ revalidated: true })
    } catch (err) {
        return res.status(500).send("Error revalidating")
    }
}
