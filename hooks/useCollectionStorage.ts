import { loadAllCollections, loadCollection, saveCollection } from '@/lib/collection/storage';
import { Collection } from '@/model/collection/Collection';
import { create } from 'zustand';

export interface CollectionStorage {
  collections: Collection[];
  addCollection: (collection: Collection) => Promise<void>;
  removeCollection: (id: string) => Promise<void>;
  loadCollection: (id: string) => Promise<Collection | null>;
  loadAllCollections: () => Promise<Collection[]>;
}

export const useCollectionStorage = create<CollectionStorage>((set, get) => ({
  collections: [],
  addCollection: async (collection: Collection) => {
    await saveCollection(collection);
    const collections = await loadAllCollections();
    set({ collections });
  },
  removeCollection: async (id: string) => {
    // Implement remove logic in storage.ts if needed
    // await removeCollection(id);
    // const collections = await loadAllCollections();
    // set({ collections });
  },
  loadCollection: async (id: string) => {
    return await loadCollection(id);
  },
  loadAllCollections: async () => {
    const collections = await loadAllCollections();
    set({ collections });
    return collections;
  },
}));
