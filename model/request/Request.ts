// src/models/request/Request.ts
import { Auth } from './Auth';
import { KeyValue } from './KeyValue';
import { RequestBody } from './RequestBody';
import { Url } from './Url';

export class Request {
  constructor(
    public method: string,
    public url: Url,
    public headers: KeyValue[] = [],
    public body?: RequestBody,
    public auth?: Auth
  ) {}
}
