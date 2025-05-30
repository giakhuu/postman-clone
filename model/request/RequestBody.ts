// src/models/request/Body.ts
export class RequestBody {
  constructor(
    public mode: 'raw' | 'formdata' | 'urlencoded',
    public raw?: string,
    public options?: { language?: string }
  ) {}
}
