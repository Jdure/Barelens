import { NextApiRequest, NextApiResponse } from "next"
import { UserRequest } from "../../types"
import createUserRequest from "../../util/createUserRequest"
import { z, ZodError } from "zod"

export const Request = z.object({
    name: z.string(),
    email: z.string().email(),
    service: z.enum([
        "portrait",
        "couple",
        "engagement",
        "wedding",
        "family",
        "maternity",
        "newborn",
    ]),
    eventDate: z.coerce.string().datetime(),
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<UserRequest>
) {
    if (req.method === "POST") {
        const body = Request.safeParse(req.body)

        createUserRequest(
            req.body.name,
            req.body.email,
            req.body.service,
            req.body.eventDate
        )

        res.status(200).json(req.body)
    }
}
