import { Button, Icon, Input, Text } from "@/components/ui";
import { View } from "react-native";
const RequestParamsTabContent: React.FC = () => {
  return (
    <View>
      <Text>Params</Text>
      <View className='my-2'>
        <View className='flex-row'>
          <Input
            placeholder='Key'
            className='flex-1 mr-2'
          ></Input>
          <Button variant = "outline">
            <Icon name = "delete"></Icon>
          </Button>
        </View>
        <Input
            placeholder='Value'
            className='mt-1'
        ></Input>
      </View>
      <View className='my-2'>
        <View className='flex-row'>
          <Input
            placeholder='Key'
            className='flex-1 mr-2'
          ></Input>
          <Button variant = "outline">
            <Icon name = "delete"></Icon>
          </Button>
        </View>
        <Input
            placeholder='Value'
            className='mt-1'
        ></Input>
      </View>
      <Button variant='outline' className='mt-2 items-center justify-center'>
        <Icon name="plussquareo" className='mr-2'></Icon>
        <Text className='text-accent-foreground'>Add Params</Text>
      </Button>
    </View>
  )
}
