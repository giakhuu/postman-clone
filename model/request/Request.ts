// src/models/request/Request.ts
import { HttpMethod } from '@/lib/enum/HttpMethod';
import { Auth } from './Auth';
import { KeyValue } from './KeyValue';
import { RequestBody } from './RequestBody';
import { Url } from './Url';

export class HttpRequest {
  constructor(
    public id: string, // Default ID based on timestamp
    public name: string, // Default ID based on timestamp
    public method: HttpMethod,
    public url: Url,
    public headers: KeyValue[] = [],
    public body?: RequestBody,
    public auth?: Auth
  ) {}
}
