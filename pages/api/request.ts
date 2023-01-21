import { NextApiRequest, NextApiResponse } from "next"
import { UserRequest } from "../../types"
import createUserRequest from "../../util/createUserRequest"
import checkDate from "../../util/checkDatabase"

export default async function request(
    req: NextApiRequest,
    res: NextApiResponse<UserRequest>
) {
    if (req.method === "POST") {
        createUserRequest(
            req.body.name,
            req.body.email,
            req.body.service,
            req.body.eventDate
        )
        res.status(200).json(req.body)
    }
}
