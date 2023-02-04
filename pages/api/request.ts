import { NextApiRequest, NextApiResponse } from "next"
import createUserRequest from "../../util/createUserRequest"
import { Request } from "../../lib/zod"
import { ZodError } from "zod"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const body = Request.parse(req.body)
            createUserRequest(
                body.name,
                body.email,
                body.service,
                body.eventDate
            )
            res.status(200).json(req.body)
        } catch (e) {
            if (e instanceof ZodError) {
                return res.status(400).json({ error: e.flatten().fieldErrors })
            }
        }
    }
}
