import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('postman.db');

export class DataInit {
    static init() {
    db.withTransactionSync(() => {
      // Bảng Collection
      db.execSync(
      `CREATE TABLE IF NOT EXISTS collections (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT,
        description TEXT
      );`
      );
      // Bảng Folder
      db.execSync(
      `CREATE TABLE IF NOT EXISTS folders (
        id TEXT PRIMARY KEY NOT NULL,
        collectionId TEXT,
        name TEXT,
        description TEXT,
        FOREIGN KEY(collectionId) REFERENCES collections(id)
      );`
      );
      // Bảng Request
      db.execSync(
      `CREATE TABLE IF NOT EXISTS requests (
        id TEXT PRIMARY KEY NOT NULL,
        collectionId TEXT,
        folderId TEXT,
        name TEXT,
        method TEXT,
        url TEXT,
        headers TEXT,
        body TEXT,
        auth TEXT,
        FOREIGN KEY(collectionId) REFERENCES collections(id),
        FOREIGN KEY(folderId) REFERENCES folders(id)
      );`
      );
    });
  }
}