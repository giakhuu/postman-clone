import { CollectionSchema } from '@/lib/zod/CollectionSchema';
import { Collection } from '@/model/collection/Collection';
import * as SQLite from 'expo-sqlite';
import { FolderStorage } from './FolderStorage';
import { RequestStorage } from './RequestStorage';

const db = SQLite.openDatabaseSync('postman.db');

export class CollectionStorage {
  /**
   * Thêm một collection mới vào SQLite database.
   */
  static addCollection(collection: Collection): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        db.execSync(
          `INSERT INTO collections (id, name, description) VALUES ('${collection.id}', '${collection.name}', '${collection.description}');`
        );
        resolve();
      } catch (error) {
        console.error('Error adding collection:', error);
        reject(error);
      }
    });
  }

  /**
   * Load tất cả collections, kèm folders và requests.
   */
  static async loadAllCollection(): Promise<Collection[]> {
    try {
      const collections = db.getAllSync('SELECT * FROM collections;');
      const result = await Promise.all(
        collections.map(async (col: any) => {
          try {
            const folders = await FolderStorage.loadFoldersInCollection(col.id);
            console.log(folders)
            const requests = await RequestStorage.loadRequestsInCollection(col.id);
            return new Collection(col.id, col.name, col.description, requests, folders);
          } catch (innerError) {
            console.error(`Error loading sub-data for collection ${col.id}:`, innerError);
            throw innerError;
          }
        })
      );
      return result;
    } catch (error) {
      console.error('Error loading all collections:', error);
      throw error;
    }
  }

  /**
   * Load một collection theo ID, kèm folders và requests.
   */
  static async loadCollection(id: string): Promise<Collection> {
    try {
      const result = db.getFirstSync('SELECT * FROM collections WHERE id = ?;', [id]);
      const collection = CollectionSchema.parse(result);

      const folders= await FolderStorage.loadFoldersInCollection(collection.id)
      const requests = await RequestStorage.loadRequestsInCollection(collection.id);

      collection.folders = folders;
      collection.requests = requests;

      return collection;
    } catch (error) {
      console.error(`Error loading collection ${id}:`, error);
      throw error;
    }
  }
}
