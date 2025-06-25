import z from "zod";

export const KeyValuePairSchema = z.object({
    keyName: z.string(),
    keyValue: z.string()
})