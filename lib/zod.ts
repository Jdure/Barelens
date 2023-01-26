import { z } from "zod"

export const Request = z.object({
    name: z
        .string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        })
        .min(2),
    email: z
        .string({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        })
        .email()
        .min(7),
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
