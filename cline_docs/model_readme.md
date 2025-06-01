# Model Layer Overview

This document describes the structure and purpose of the files in the `model` directory of the project. The model layer defines the core data structures used throughout the application, especially for handling API requests, collections, and folders (in the style of Postman-like apps).

## Directory Structure

```
model/
├── collection/   # (currently empty)
├── folder/       # (currently empty)
└── request/
    ├── Auth.ts
    ├── KeyValue.ts
    ├── Request.ts
    ├── RequestBody.ts
    └── Url.ts
```

## Request Models

### Auth.ts
Defines the `Auth` class for request authentication information.
```ts
export class Auth {
    constructor(
        public type: 'beaer' | 'basic' | 'noauth',
        public credentials: Record<string, string>
    ) {}
}
```
- **type**: Authentication type (bearer, basic, or noauth)
- **credentials**: Key-value pairs for authentication data

### KeyValue.ts
Defines a simple key-value pair structure, used for headers, query params, etc.
```ts
export class KeyValue {
  constructor(public key: string, public value: string, public type?: string) {}
}
```
- **key**: The key/name
- **value**: The value
- **type**: Optional, can be used to distinguish between header/query/body, etc.

### RequestBody.ts
Represents the body of an HTTP request.
```ts
export class RequestBody {
  constructor(
    public mode: 'raw' | 'formdata' | 'urlencoded',
    public raw?: string,
    public options?: { language?: string }
  ) {}
}
```
- **mode**: The type of body (raw, formdata, urlencoded)
- **raw**: The raw string content (if mode is raw)
- **options**: Additional options, e.g., language for code samples

### Url.ts
Represents a parsed URL and provides a computed `full` property.
```ts
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
```
- **raw**: The original URL string
- **protocol**: e.g., 'http', 'https'
- **host**: Array of host segments
- **port**: Port as string
- **path**: Array of path segments
- **query**: Array of KeyValue query parameters
- **full**: Computed property returning the full URL string

### Request.ts
Defines the main `Request` class, representing an HTTP request.
```ts
export class Request {
  constructor(
    public method: string,
    public url: Url,
    public headers: KeyValue[] = [],
    public body?: RequestBody,
    public auth?: Auth
  ) {}
}
```
- **method**: HTTP method (GET, POST, etc.)
- **url**: Instance of Url class
- **headers**: Array of KeyValue headers
- **body**: Optional RequestBody
- **auth**: Optional Auth

## collection/ and folder/
Currently, these folders are empty. They are reserved for future models related to collections and folders, which will help organize requests into groups (similar to Postman collections/folders).

---
This model layer provides a clear, extensible foundation for representing HTTP requests and related data in the app.
