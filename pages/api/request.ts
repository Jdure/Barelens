import { NextApiRequest, NextApiResponse } from "next"
import { UserRequest } from "../../types"
import createUserRequest from "../../util/createUserRequest"
import checkDate from "../../util/checkDatabase"

export default async function request(
    req: NextApiRequest,
    res: NextApiResponse<UserRequest>
) {
    if (req.method === "POST") {
        const { name, email, service, eventDate } = req.body
        console.log(eventDate)
        createUserRequest(name, email, service, eventDate)
        res.status(200).json(req.body)
    }
}
