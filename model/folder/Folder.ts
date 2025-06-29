import { HttpRequest } from "../request/Request";

export class Folder {
  constructor(
    public id: string, // Default ID based on timestamp
    public collectionId: string,
    public name: string, // Default ID based on timestamp
    public description: string = "",
    public requests: HttpRequest[] = []
  ) {}

  addRequest(request: HttpRequest) {
    this.requests.push(request);
  }

  removeRequest(requestId: string) {
    this.requests = this.requests.filter(req => req.id !== requestId);
  }
}