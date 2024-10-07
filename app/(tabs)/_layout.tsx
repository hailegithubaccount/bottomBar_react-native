import { Tabs } from 'expo-router'
import React from 'react'
import { View,Text } from 'react-native'
import {TabBar} from '@/components/TabBar';

const TabLayout = () => {
  return (
    
      <Tabs tabBar={props => <TabBar {...props} />}>
        <Tabs.Screen name="index" options={{title:"Home"}}/>
        <Tabs.Screen name="explore" options={{title:"exporler"}}/>
        <Tabs.Screen name="profile" options={{title:"profile"}}/>
        </Tabs>
    
  )
}

export default TabLayout
