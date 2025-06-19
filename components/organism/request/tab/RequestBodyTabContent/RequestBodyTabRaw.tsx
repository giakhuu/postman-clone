import JSONBodyEditor from '@/components/molecules/Form/JSONBodyEditor'
import React from 'react'
import { View } from 'react-native'

const RequestBodyTabRaw = () => {
  return (
    <View className="flex-1">
      <JSONBodyEditor />
    </View>
  )
}

export default RequestBodyTabRaw