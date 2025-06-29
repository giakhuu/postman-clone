import { Button, Text } from '@/components/ui';
import { useTabStore } from '@/hooks/useTabStore';
import { HttpMethod } from '@/lib/enum/HttpMethod';
import { HttpRequest } from '@/model/request/Request';
import { useRouter } from 'expo-router'; // Thêm dòng này
import React from 'react';
import Tag from '../../../molecules/Request/Tag';
import RequestScreen from '../../Request/RequestScreen';

interface RequestItemProps {
  request: HttpRequest
}

const RequestItem: React.FC<RequestItemProps> = ({ request }) => {
  const router = useRouter()
  const { addTab } = useTabStore()

  const handlePress = () => {
    const newTab = {
      id: request.id,
      requestId: request.id,
      name: request.name,
      method: request.method,
      content: <RequestScreen></RequestScreen>
    };
    addTab(newTab, request);
    router.navigate(`/(drawer)/request`)
  }

  return (
    <Button 
      variant='ghost' 
      className="flex-row items-center py-1"
      onPress={handlePress}
    >
      <Tag method={request.method as HttpMethod} />
      <Text className='text-lg ml-2 text-secondary-foreground'>{request.name}</Text>
    </Button>
  )
}

export default RequestItem
