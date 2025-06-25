import { Folder } from "../folder/Folder";
import { HttpRequest } from "../request/Request";

export class Collection {
  constructor(
    public id: string,
    public name: string,
    public description: string = "",
    public requests: HttpRequest[] = [],
    public folders: Folder[] = []
  ) {}
}