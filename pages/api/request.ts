import { NextApiRequest, NextApiResponse } from "next"
import { UserRequest } from "../../types"
import createUserSession from "../../util/createUserSession"

export default function request(
    req: NextApiRequest,
    res: NextApiResponse<UserRequest>
) {
    if (req.method === "POST") {
        createUserSession(
            req.body.name,
            req.body.email,
            req.body.service,
            req.body.eventDate
        )
        res.status(200).json(req.body)
    }
}
