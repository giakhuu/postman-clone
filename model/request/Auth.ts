// src/models/request/Auth.ts

import { KeyValuePair } from "../KeyValuePair";

export type ApiKeyIn = "header" | "query" | "cookie";

export interface BasicCredentials {
  username: string;
  password: string;
}

export interface BearerCredentials {
  token: string;
}

export interface ApiKeyCredentials extends KeyValuePair {
  in: ApiKeyIn;
}

export type AuthType = "basic" | "bearer" | "apikey" | "noauth";

export class Auth {
  constructor(
    public type: AuthType,
    public credentials: BasicCredentials | BearerCredentials | ApiKeyCredentials | Record<string, never>
  ) {}
}
