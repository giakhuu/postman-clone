import { CollectionStorage as CollectionStorageApi } from '@/data/CollectionStorage';
import { Collection } from '@/model/collection/Collection';
import { create } from 'zustand';

export interface CollectionStorageState {
  collections: Collection[];
  addCollection: (collection: Collection) => Promise<void>;
  removeCollection: (id: string) => Promise<void>;
  loadCollection: (id: string) => Promise<Collection | null>;
  loadAllCollections: () => Promise<Collection[]>;
  updateCollection: (collection: Collection) => Promise<void>
}

export const useCollectionStorage = create<CollectionStorageState>((set, get) => ({
  collections: [],
  addCollection: async (collection: Collection) => {
    await CollectionStorageApi.addCollection(collection);
    const collections = await CollectionStorageApi.loadAllCollection();
    set({ collections });

  },
  removeCollection: async (id: string) => {
    // await LibCollectionStorage.remove(id);
    // set(state => ({
    //   collections: state.collections.filter(col => col.id !== id)
    // }));
  },
  loadCollection: async (id: string) => {
    const collection =  await CollectionStorageApi.loadCollection(id)
    return collection;
  },
  loadAllCollections: async () => {
    const collections = await CollectionStorageApi.loadAllCollection();
    set({ collections });
    return collections;
  },
  updateCollection: async (collection: Collection) => {
    await CollectionStorageApi.updateCollection(collection);
  }
}));
