import { RequestStorage as LibRequestStorage } from "@/data/RequestStorage";
import { HttpRequest } from "@/model/request/Request";
import { create } from "zustand";
export interface RequestStorage {
  requests: HttpRequest[],
  addRequest: (request: HttpRequest) => Promise<HttpRequest[]>
  loadRequestsInCollection: (collectionId: string) => Promise<HttpRequest[]>
  loadRequestsInFolder:(folderId: string) => Promise<HttpRequest[]>
  loadAllRequest: () => Promise<HttpRequest[]>
  removeAllRequest: () => Promise<void>
}

export const useRequestStorage = create<RequestStorage>((set, get) => ({
  requests: [],
  loadRequestsInCollection: async (collectionId: string): Promise<HttpRequest[]> => {
    console.log(`useRequestStorage ${collectionId}`)
    const result: HttpRequest[] = await LibRequestStorage.loadRequestsInCollection(collectionId);
    set({ requests: result });
    return result;
  },

  loadRequestsInFolder: async(folderId) => {
    return await LibRequestStorage.loadRequestsInCollection(folderId)
  },

  addRequest: async(request) => {
    await LibRequestStorage.addRequest(request)
    let requests: HttpRequest[] = []
    if(request.collectionId) {
      requests = await LibRequestStorage.loadRequestsInCollection(request.collectionId)
    } else if(request.folderId) {
      requests = await LibRequestStorage.loadRequestsInCollection(request.folderId)
    }
    set({requests})
    return requests
  },

  loadAllRequest: async() => {
    const result = await LibRequestStorage.loadAllRequest()
    set ({requests: result})
    return result
  },

  removeAllRequest: async() => {
    await LibRequestStorage.removeAllRequests()
  }
}));