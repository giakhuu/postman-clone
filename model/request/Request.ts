// src/models/request/Request.ts
import { HttpMethod } from '@/lib/enum/HttpMethod';
import { KeyValuePair } from '../KeyValuePair';
import { Auth } from './Auth';
import { RequestBody } from './RequestBody';

export class HttpRequest {
  constructor(
    public id: string, // Default ID based on timestamp
    public name: string, // Default ID based on timestamp
    public method: HttpMethod,
    public collectionId: string,
    public url: string = "",
    public folderId?: string,
    public headers: KeyValuePair[] = [],
    public body?: RequestBody,
    public auth?: Auth,
  ) {}
}
