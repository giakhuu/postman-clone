import { useTabStore } from '@/hooks/useTabStore'
import React from 'react'
import { View } from 'react-native'
import RequestEditorActions from './RequestEditorActions'
import RequestEditorHeader from './RequestEditorHeader'
import RequestTabPanel from './RequestTabPanel'

const RequestScreen:React.FC = () => {
    const { getRequest, activeTabId } = useTabStore()
    const request = activeTabId ? getRequest(activeTabId) : null
    return (
        <View className="flex-1 bg-background py-4">
        {request && (
          <>
            <RequestEditorHeader request={request} />
            <RequestEditorActions request={request} />
            <RequestTabPanel request={request} />
          </>
        )}
        </View>
    )
}

export default RequestScreen