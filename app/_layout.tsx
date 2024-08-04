import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <Drawer screenOptions={{drawerContentStyle:{backgroundColor:'#1e1e1e'},
      drawerLabelStyle:{color: '#fff'},
    }}>
     <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Normal',
            title: 'Normal Calculator',
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="(tabs)/scientific"
          options={{
            drawerLabel: 'Scientific',
            title: 'Scientific Calculator',
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="(tabs)/length"
          options={{
            drawerLabel: 'Length',
            title: 'Length Converter',
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="(tabs)/bmi"
          options={{
            drawerLabel: 'BMI',
            title: 'BMI Calculator',
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="(tabs)/currency"
          options={{
            drawerLabel: 'Currency',
            title: 'Currency Converter',
            headerShown: false,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}