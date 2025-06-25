import { Collection } from '@/model/collection/Collection';
import { Folder } from '@/model/folder/Folder';
import * as SQLite from 'expo-sqlite';
import { RequestStorage } from './RequestStorage';

const db = SQLite.openDatabaseSync('postman.db');

export class CollectionStorage {
  static addCollection (collection: Collection) {
    db.execSync(
      `INSERT INTO collections (id, name, description) VALUES ('${collection.id}', '${collection.name}', '${collection.description}');`
    )
  }

  static async loadAllCollection(): Promise<Collection[]> {
    const collections = db.getAllSync('SELECT * FROM collections;');
    return Promise.all(collections.map(async (col: any) => {
      // Lấy folders thuộc collection này
      const folders = db.getAllSync('SELECT * FROM folders WHERE collectionId = ?;', [col.id])
        .map((f: any) => new Folder(f.id, f.name, f.description));
      // Lấy requests thuộc collection này\
      const requests = await RequestStorage.loadRequestsInCollection(col.id)
      return new Collection(
        col.id,
        col.name,
        col.description,
        requests,
        folders
      );
    }));
  }
} 