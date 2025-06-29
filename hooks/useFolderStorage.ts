import { FolderStorage as FolderStorageApi } from "@/data/FolderStorage";
import { Folder } from "@/model/folder/Folder";
import { create } from "zustand";

export interface FolderStorage{
    folders: Folder[]
    addFolder:(folder: Folder) => Promise<void>
}

export const useFolderStorage = create<FolderStorage> ((set, get) => ({
    folders: [],
    addFolder: async (folder: Folder) => {
        await FolderStorageApi.addFolder(folder)
        return
    }
}))