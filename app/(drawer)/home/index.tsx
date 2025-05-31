// import { Text } from '@/components/ui'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { QuickTip } from '@/components/molecules/Tips/QuickTip'
import { Button, Icon, Text } from '@/components/ui'

const actions = [
  { 
    key: 'new',    
    icon: <Icon name="filetext1" size={24}/>, 
    label: 'New Request', 
    onPress: () => console.log('NewRequest') 
  },
  { 
    key: 'import', 
    icon: <Icon name="download" size={24}/>,   
    label: 'Import',      
    onPress: () => console.log('Import') 
  },
  { 
    key: 'browse', 
    icon: <Icon name="windowso" size={24}/>,       
    label: 'Browse APIs', 
    onPress: () => console.log('BrowseAPIs') 
  },
  { 
    key: 'history',
    icon:  <Icon name="clockcircleo" size={24}/>,      
    label: 'History',     
    onPress: () => console.log('History') 
  },
];

const index = () => {
  const { t } = useTranslation('home')

  return (
    <View className='flex-1 items-center justify-center bg-background p-8'>
      <Text className='text-xl font-semibold'>{t('header.welcome')}</Text>
      <Text className='text-muted-foreground'>{t('header.description')}</Text>
      <ActionGrid actions={actions} />

      <QuickTip tip={t('quickTip')} />

      <Button
        className='w-full flex-row items-center justify-center shadow-md mt-2'
        variant='default'
        size='lg'
        onPress={() => console.log('Get Started')}
      >
        <Icon name="plus" size={24} className='mr-2' />
        <Text >
          {t("button.create_new_req")}
        </Text>
      </Button>
    </View>
  )
}

type ActionTittleProps = {
    icon: React.ReactNode;
    label: string;
    onPress: () => void;
}

type ActionGridProps = {
  actions: ActionTittleProps[];
};

export function ActionGrid({ actions }: ActionGridProps) {
  return (
    <View className="flex-row flex-wrap -mx-2 my-2">
      {actions.map((item, index) => (
        <View key={index} className="w-1/2 p-2">
          <ActionTitle
            icon={item.icon}
            label={item.label}
            onPress={item.onPress}
          />
        </View>
      ))}
    </View>
  );
}

export const ActionTitle: React.FC<ActionTittleProps> = ({ icon, label, onPress }) => {
    return (
        <Button
            onPress={onPress}
            variant="outline"
            className="w-full flex-col items-center justify-center shadow-lg"
        >
            <View className="m-4">
                {icon}
            </View>
            <Text className="font-semibold text-lg">{label}</Text>
        </Button>
    );
}

export default index