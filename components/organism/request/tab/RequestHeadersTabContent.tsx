import KeyValueInput from "@/components/molecules/Form/KeyValueInput"
import { Button, Icon, Text } from "@/components/ui"
import { View } from "react-native"
export const RequestHeaderTabContent: React.FC = () => {
  return (
    <View>
      <Text>Header</Text>
      <KeyValueInput></KeyValueInput>
      <Button variant='outline' className='mt-2 items-center justify-center'>
        <Icon name="plussquareo" className='mr-2'></Icon>
        <Text className='text-accent-foreground'>Add Header</Text>
      </Button>
    </View>
  )
}