// src/models/request/Url.ts

import { KeyValuePair } from "../KeyValuePair";


export class Url {
  constructor(
    public raw: string,
    public protocol: string,
    public host: string[],
    public port: string,
    public path: string[],
    public query: KeyValuePair[]
  ) {}

  get full(): string {
    const base = `${this.protocol}://${this.host.join('.')}:${this.port}/${this.path.join('/')}`;
    const q = this.query.map(q => `${q.keyName}=${q.keyValue}`).join('&');
    return `${base}?${q}`;
  }
}
