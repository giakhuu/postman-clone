import { Collection } from '@/model/collection/Collection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveCollection = async (collection: Collection) => {
  try {
    await AsyncStorage.setItem(`collection_${collection.id}`, JSON.stringify(collection));
  } catch (e) {
    console.error('Error saving collection:', e);
  }
};

export const loadCollection = async (id: string): Promise<Collection | null> => {
  try {
    const value = await AsyncStorage.getItem(`collection_${id}`);
    if (value) {
      return JSON.parse(value) as Collection;
    }
    return null;
  } catch (e) {
    console.error('Error loading collection:', e);
    return null;
  }
};

export const loadAllCollections = async (): Promise<Collection[]> => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const collectionKeys = keys.filter(key => key.startsWith('collection_'));
    const stores = await AsyncStorage.multiGet(collectionKeys);
    return stores
      .map(([key, value]) => (value ? JSON.parse(value) as Collection : null))
      .filter(Boolean) as Collection[];
  } catch (e) {
    console.error('Error loading all collections:', e);
    return [];
  }
};
