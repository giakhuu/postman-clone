import KeyValueInput from '@/components/molecules/Form/KeyValueInput'
import { Button, Icon } from '@/components/ui'
import React from 'react'
import { Text, View } from 'react-native'

const RequestBodyTabFormData = () => {
  return (
    <View>
      <KeyValueInput></KeyValueInput>
      <Button variant='outline' className='mt-2 items-center justify-center'>
        <Icon name="plussquareo" className='mr-2'></Icon>
        <Text className='text-accent-foreground'>Add Body</Text>
      </Button>
    </View>
  )
}

export default RequestBodyTabFormData