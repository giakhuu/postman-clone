// src/models/request/Url.ts
import { KeyValue } from './KeyValue';

export class Url {
  constructor(
    public raw: string,
    public protocol: string,
    public host: string[],
    public port: string,
    public path: string[],
    public query: KeyValue[]
  ) {}

  get full(): string {
    const base = `${this.protocol}://${this.host.join('.')}:${this.port}/${this.path.join('/')}`;
    const q = this.query.map(q => `${q.key}=${q.value}`).join('&');
    return `${base}?${q}`;
  }
}
