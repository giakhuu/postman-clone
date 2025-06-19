import React from 'react'
import { View } from 'react-native'
import { twMerge } from 'tailwind-merge'

const Divider = ({ className = '' }: { className?: string }) => {
  const mergedClass = twMerge('w-full h-[1px] bg-muted my-2', className)
  return (
    <View className={mergedClass} />
  )
}

export default Divider