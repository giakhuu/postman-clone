import { HttpRequest } from "@/model/request/Request";
import z from "zod";
import { HttpMethod } from "../enum/HttpMethod";
import { AuthSchema } from "./AuthSchema";
import { KeyValuePairSchema } from "./KeyValuePairSchema";
import { RequestBodySchema } from "./RequestBodySchema";

const HttpMethodSchema = z.nativeEnum(HttpMethod);

export const HttpRequestSchema = z.preprocess((input) => {
  if (typeof input !== 'object' || input === null) return input;
  const row = input as any;
  return {
    ...row,
    headers: row.headers && row.headers !== "null" ? JSON.parse(row.headers) : [],
    body: row.body && row.body !== "null" ? JSON.parse(row.body) : undefined,
    auth: row.auth && row.auth !== "null" ? JSON.parse(row.auth) : undefined,
    url: typeof row.url === "string" && row.url.startsWith('"') ? JSON.parse(row.url) : row.url ?? "",
    folderId: typeof row.folderId === "string" ? row.folderId : undefined,
  };
},
z.object({
    id: z.string(),
    name: z.string(),
    method: HttpMethodSchema,
    collectionId: z.string(),
    url: z.string().default(""),
    folderId: z.string().optional(),
    headers: KeyValuePairSchema.array().optional().default([]),
    body:    RequestBodySchema.optional(),
    auth:    AuthSchema.optional(),
})
.transform((obj) => {
    return new HttpRequest(
      obj.id,
      obj.name,
      obj.method,
      obj.collectionId,
      obj.url,
      obj.folderId,
      obj.headers,
      obj.body,
      obj.auth,
    );
  })
);

export const HttpRequestsSchema = HttpRequestSchema.array();