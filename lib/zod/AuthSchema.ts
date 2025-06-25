// src/schemas/AuthSchema.ts
import { ApiKeyIn, Auth } from "@/model/request/Auth";
import { z } from "zod";

// 1) Basic Auth
const BasicAuthSchema = z.object({
  type: z.literal("basic"),
  credentials: z.object({
    username: z.string(),
    password: z.string(),
  }),
});

// 2) Bearer Token
const BearerAuthSchema = z.object({
  type: z.literal("bearer"),
  credentials: z.object({
    token: z.string(),
  }),
});

// 3) API Key (có thể nằm ở header/query/cookie)
const ApiKeyAuthSchema = z.object({
  type: z.literal("apikey"),
  credentials: z.object({
    keyName: z.string(),
    keyValue: z.string(),
    in: z.enum(["header", "query", "cookie"]) as z.ZodType<ApiKeyIn>,
  }),
});

// 4) No Auth
const NoAuthSchema = z.object({
  type: z.literal("noauth"),
  credentials: z.object({}).passthrough(),  // rỗng
});

// 5) Discriminated union và transform thành instance Auth
export const AuthSchema = z
  .discriminatedUnion("type", [
    BasicAuthSchema,
    BearerAuthSchema,
    ApiKeyAuthSchema,
    NoAuthSchema,
  ])
    .transform((obj) => {
    // Phân nhánh rõ ràng để TS hiểu loại đúng của credentials
    switch (obj.type) {
      case "basic":
        return new Auth("basic", obj.credentials); // obj.credentials: BasicCredentials
      case "bearer":
        return new Auth("bearer", obj.credentials); // obj.credentials: BearerCredentials
      case "apikey":
        return new Auth("apikey", obj.credentials); // obj.credentials: ApiKeyCredentials
      case "noauth":
        return new Auth("noauth", {});              // credentials luôn {}, đúng Record<string,never>
    }
  });
