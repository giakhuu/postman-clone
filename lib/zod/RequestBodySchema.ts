// src/schemas/BodySchemas.ts
import { RequestBody } from "@/model/request/RequestBody";
import { z } from "zod";

// 1) Schema cho KeyValuePair
const KeyValuePairSchema = z.object({
  keyName:  z.string(),
  keyValue: z.string(),
});

// 2) Schema cho từng variant
const RawBodySchema = z.object({
  body: z.string(),
});

const FormDataBodySchema = KeyValuePairSchema;
const UrlencodedDataBodySchema = KeyValuePairSchema;

// Với 'none', ta cho body là object rỗng
const NoneBodySchema = z.object({});

// 3) Discriminated union trên field bodyType
export const RequestBodySchema = z
  .discriminatedUnion("bodyType", [
    z.object({
      bodyType: z.literal("raw"),
      body:      RawBodySchema,
    }),
    z.object({
      bodyType: z.literal("formdata"),
      body:      FormDataBodySchema,
    }),
    z.object({
      bodyType: z.literal("urlencoded"),
      body:      UrlencodedDataBodySchema,
    }),
    z.object({
      bodyType: z.literal("none"),
      body:      NoneBodySchema,
    }),
  ])
  // 4) Transform thành instance của class RequestBody
  .transform((obj) => {
    switch (obj.bodyType) {
      case "raw":
        return new RequestBody("raw", obj.body);
      case "formdata":
        return new RequestBody("formdata", obj.body);
      case "urlencoded":
        return new RequestBody("urlencoded", obj.body);
      case "none":
        return new RequestBody("none", {} as never);
    }
  });

// Nếu cần parse mảng:
export const RequestBodiesSchema = RequestBodySchema.array();
