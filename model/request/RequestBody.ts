import { KeyValuePair } from "../KeyValuePair"

// src/models/request/Body.ts
interface RawBody {
  body: string
}

interface FormDataBody extends KeyValuePair {}

interface UrlencodedDataBody extends KeyValuePair {}

export type BodyType = 'raw' | 'formdata' | 'urlencoded' | "none"

export class RequestBody {
  constructor(
    public bodyType: BodyType,
    public body: RawBody | FormDataBody | UrlencodedDataBody | never
  ) {}
}
