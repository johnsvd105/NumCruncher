import { Tabs } from 'expo-router';
import React from 'react';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerLeft: () => <DrawerToggleButton tintColor='#000' />
      }}>
      <Tabs.Screen
        name="length"
        options={{
          title: 'Home',
        }}
      />
    </Tabs>
  );
}
