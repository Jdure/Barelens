import { z } from "zod"

export const Request = z.object({
    name: z
        .string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        })
        .min(2, { message: "Name must contain at least 2 character(s)" }),
    email: z
        .string({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        })
        .email()
        .min(10, { message: "Email must contain at least 10 character(s)" }),
    service: z.enum([
        "portrait",
        "couple",
        "engagement",
        "wedding",
        "family",
        "maternity",
        "newborn",
    ]),
    eventDate: z.coerce.string().datetime({
        offset: true,
        message: "Invalid datetime string",
    }),
})
