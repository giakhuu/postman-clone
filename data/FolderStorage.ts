import { FoldersSchema } from '@/lib/zod/FolderSchema';
import { Folder } from '@/model/folder/Folder';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('postman.db');
export class FolderStorage {
    static addFolder(folder: Folder) : Promise<void>{
        return new Promise((resolve, reject) => {
            try {
                db.execSync(
                `INSERT INTO folders (id, collectionId, name, description) VALUES ('${folder.id}','${folder.collectionId}' ,'${folder.name}', '${folder.description}');`
                );
                resolve();
            } catch (error) {
                console.error('Error adding collection:', error);
                reject(error);
            }
        });
    }

    static loadFoldersInCollection(collectionId: string): Folder[] {
        const rows = db.getAllSync(
            `SELECT * FROM folders WHERE collectionId = ?;`,
            [collectionId]
        );
        return FoldersSchema.parse(rows)
    }
} 