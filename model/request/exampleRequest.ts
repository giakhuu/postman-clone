import { HttpMethod } from "@/lib/enum/HttpMethod";
import { Auth } from "@/model/request/Auth";
import { KeyValue } from "@/model/request/KeyValue";
import { HttpRequest } from "@/model/request/Request";
import { RequestBody } from "@/model/request/RequestBody";
import { Url } from "@/model/request/Url";

// Example 1: Simple GET request
const getUserRequest = new HttpRequest(
  "get-user-1", // id
  "Get User Profile", // name
  HttpMethod.GET,
  new Url(
    "https://api.example.com/users",
    "https",
    ["api", "example", "com"],
    "443",
    ["users"],
    []
  ),
  [
    new KeyValue("Accept", "application/json"),
  ]
);

// Example 2: POST request with JSON body
const createUserRequest = new HttpRequest(
  "create-user-1", // id
  "Create New User", // name
  HttpMethod.POST,
  new Url(
    "https://api.example.com/users",
    "https",
    ["api", "example", "com"],
    "443",
    ["users"],
    []
  ),
  [
    new KeyValue("Content-Type", "application/json"),
    new KeyValue("Accept", "application/json"),
  ],
  new RequestBody(
    "raw",
    JSON.stringify({
      name: "John Doe",
      email: "john@example.com"
    }),
    { language: "json" }
  )
);

// Example 3: PUT request with auth
const updateUserRequest = new HttpRequest(
  "update-user-1", // id
  "Update User Profile", // name
  HttpMethod.PUT,
  new Url(
    "https://api.example.com/users/123",
    "https",
    ["api", "example", "com"],
    "443",
    ["users", "123"],
    []
  ),
  [
    new KeyValue("Content-Type", "application/json"),
  ],
  new RequestBody(
    "raw",
    JSON.stringify({ name: "Updated Name" }),
    { language: "json" }
  ),
  new Auth("bearer", { token: "example-token-123" })
);

// Example 4: GET request with query parameters
const searchUsersRequest = new HttpRequest(
  "search-users-1", // id
  "Search Users", // name
  HttpMethod.GET,
  new Url(
    "https://api.example.com/users/search",
    "https",
    ["api", "example", "com"],
    "443",
    ["users", "search"],
    [
      new KeyValue("query", "john"),
      new KeyValue("limit", "10"),
      new KeyValue("page", "1")
    ]
  ),
  [
    new KeyValue("Accept", "application/json"),
  ]
);

export const exampleRequests = [
  getUserRequest,
  createUserRequest,
  updateUserRequest,
  searchUsersRequest
];