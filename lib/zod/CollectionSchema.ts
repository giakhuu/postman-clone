import { Collection } from "@/model/collection/Collection";
import z from "zod";
import { FolderSchema } from "./FolderSchema";
import { HttpRequestSchema } from "./HttpRequestSchema";

// 1) Schema cho Collection
export const CollectionSchema = z
  .object({
    id:          z.string(),
    name:        z.string(),
    description: z.string().optional().default(""),
    requests:    HttpRequestSchema.array().optional().default([]),
    folders:     FolderSchema.array().optional().default([]),
  })
  // 2) Transform thành instance của class Collection
  .transform((obj) =>
    new Collection(
      obj.id,
      obj.name,
      obj.description,
      obj.requests,
      obj.folders
    )
  );

  export const CollectionsSchema = CollectionSchema.array()