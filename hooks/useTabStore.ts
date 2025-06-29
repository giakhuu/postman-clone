import { HttpMethod } from '@/lib/enum/HttpMethod';
import { HttpRequest } from '@/model/request/Request';
import { ReactNode, useCallback } from 'react';
import { create } from 'zustand';

export interface Tab {
  id: string
  requestId: string
  name: string
  method: HttpMethod
  content: ReactNode
}

interface TabState {
  tabs: Tab[]
  activeTabId: string | null
  requestCache: Record<string, HttpRequest>
  addTab: (tab: Tab, request: HttpRequest) => void
  removeTab: (tabId: string) => void
  setActiveTab: (tabId: string) => void
  getRequest: (requestId: string) => HttpRequest | null
}

export const useTabStore = create<TabState>((set, get) => ({
  tabs: [],
  activeTabId: null,
  requestCache: {},
  addTab: (tab, request) => set((state) => {
    // Nếu tab đã tồn tại, không load lại request, chỉ set activeTabId
    if (state.tabs.some(t => t.id === tab.id)) {
      return { activeTabId: tab.id };
    }
    // Nếu tab mới, lưu request vào cache
    return {
      tabs: [...state.tabs, tab],
      activeTabId: tab.id,
      requestCache: { ...state.requestCache, [tab.requestId]: request }
    };
  }),
  removeTab: useCallback((tabId) => set((state) => ({
    tabs: state.tabs.filter(t => t.id !== tabId),
    activeTabId: state.activeTabId === tabId 
      ? state.tabs[state.tabs.length - 2]?.id || null 
      : state.activeTabId
  })), []),
  setActiveTab: useCallback((tabId) => set({ activeTabId: tabId }), []),
  getRequest: (requestId) => get().requestCache[requestId]
}))