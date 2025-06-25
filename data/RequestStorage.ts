import { HttpRequestsSchema } from '@/lib/zod/HttpRequestSchema';
import { HttpRequest } from '@/model/request/Request';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('postman.db');
export class RequestStorage {
    static loadRequestsInCollection(collectionId: string): HttpRequest[] {
        const rows = db.getAllSync(
            `SELECT * FROM requests WHERE collectionId = ?;`,
            [collectionId]
        );
        console.log(`RequestStorage: ${rows}`)
        return HttpRequestsSchema.parse(rows)
    }

    static loadRequestsInFolder(folderId: string): HttpRequest[] {
        const rows = db.getAllSync(
            `SELECT * FROM requests WHERE folderId = ?;`,
            [folderId]
        );
        return HttpRequestsSchema.parse(rows)
    }

    static loadAllRequest() {
        try {
            const result = db.getAllSync('SELECT * FROM requests;');
            console.log(result);
            const requests = HttpRequestsSchema.parse(result);
            return requests;
        } catch (e) {
            console.error('Error loading requests:', e);
            return [];
        }
    }

    static addRequest(request: HttpRequest) {
        db.execSync(
        `INSERT INTO requests (
            id, collectionId, folderId, name, method, url, headers, body, auth
        ) VALUES (
            '${request.id}',
            ${request.collectionId},
            ${request.folderId ? `'${request.folderId}'` : 'NULL'},
            '${request.name}',
            '${request.method}',
            '${request.url}',
            '${JSON.stringify(request.headers ?? [])}',
            '${JSON.stringify(request.body ?? null)}',
            '${JSON.stringify(request.auth ?? null)}'
        );`
        );
    }

    static removeAllRequests() {
        try {
            db.execSync('DELETE FROM requests;');
            console.log('All requests have been removed.');
        } catch (e) {
            console.error('Error removing all requests:', e);
        }
    }
}