import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { GameList, Main, MyPage, Shop } from '../Pages/index'
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="홈" 
        component={Main}
        options={{
          tabBarIcon : () => (
            <Image
              source={require('../assets/images/Home.png')}
              resizeMode='contain'
            />
          )
        }}
      />
      <Tab.Screen 
        name="마이" 
        component={MyPage}
      />
      <Tab.Screen 
        name="상점" 
        component={Shop}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
