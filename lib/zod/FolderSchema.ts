// src/schemas/FolderSchema.ts
import { Folder } from "@/model/folder/Folder";
import { z } from "zod";
import { HttpRequestSchema } from "./HttpRequestSchema";

// 1) Schema cho Folder
export const FolderSchema = z
  .object({
    id:          z.string(),
    name:        z.string(),
    description: z.string().optional().default(""),
    requests:    HttpRequestSchema.array().optional().default([]),
  })
  // 2) Transform thành instance của class Folder
  .transform((obj) =>
    new Folder(
      obj.id,
      obj.name,
      obj.description,
      obj.requests
    )
  );

// 3) Nếu cần parse mảng Folder
export const FoldersSchema = FolderSchema.array();
