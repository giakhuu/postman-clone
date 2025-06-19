import { HttpMethod } from '@/lib/enum/HttpMethod';
import { useCallback } from 'react';
import { create } from 'zustand';

export interface Tab {
  id: string
  requestId: string
  name: string
  method: HttpMethod
}

interface TabState {
  tabs: Tab[]
  activeTabId: string | null
  addTab: (tab: Tab) => void
  removeTab: (tabId: string) => void
  setActiveTab: (tabId: string) => void
}

export const useTabStore = create<TabState>((set) => ({
  tabs: [],
  activeTabId: null,
  addTab: useCallback((tab) => set((state) => ({
    tabs: [...state.tabs, tab],
    activeTabId: tab.id
  })), []),
  removeTab: useCallback((tabId) => set((state) => ({
    tabs: state.tabs.filter(t => t.id !== tabId),
    activeTabId: state.activeTabId === tabId 
      ? state.tabs[state.tabs.length - 2]?.id || null 
      : state.activeTabId
  })), []),
  setActiveTab: useCallback((tabId) => set({ activeTabId: tabId }), [])
}))