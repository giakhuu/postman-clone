import { Stack } from 'expo-router'
import React from 'react'

const AppStack = () => {
  return (
    <Stack>
        <Stack.Screen
            name="(drawer)"
            options={{ headerShown: false }}
        />
    </Stack>
  )
}

export default AppStack