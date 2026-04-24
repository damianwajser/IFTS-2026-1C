import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen2 from './screens/DetailScreen2';
import { Ionicons } from '@expo/vector-icons';

export type RootTabParamList = {
  Home: undefined;
  Details: {
    productId?: number; 
    username?: string;
  };
  Details2: {
    username?: string;
  };

}

const Tab = createBottomTabNavigator<RootTabParamList>();

const App : React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName: React.ComponentProps<typeof Ionicons>['name'] = 'help';
            switch (route.name) {
              case 'Home':
                iconName = 'home-outline';
                break;
              case 'Details':
                iconName = 'desktop-outline';
                break;
              case 'Details2':
                iconName = 'settings-outline';
                break;
              default:
                iconName = 'help';
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2563eb',
          tabBarInactiveTintColor: '#6b7280',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { height: 58, paddingBottom: 0, paddingTop: 6},
        })}
      >
       
        <Tab.Screen name='Details' component={DetailScreen} 
                initialParams={{username:"damian", productId: 7}}/>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Details2' component={DetailScreen2} initialParams={{username:"Roberto"}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;