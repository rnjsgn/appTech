import { createStackNavigator } from '@react-navigation/stack'

import { Main, MyPage, GameList, PointHistory, Game } from '../Pages/index';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="앱 테크" 
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="게임 리스트" 
          component={GameList}
        />
        <Stack.Screen
          name="포인트 내역" 
          component={PointHistory}
        />
        <Stack.Screen
          name="게임" 
          component={Game}
        />
      </Stack.Navigator>
    );
  };
  
  export default AppNavigator;