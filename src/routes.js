import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Activate from './pages/activate';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import List from './pages/list';
import Detail from './pages/Detail';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
          Activate,
          Detail
        }),
        App: createBottomTabNavigator({
          Profile,
          Dashboard,
          List,
        },
          {
            tabBarOptions: {
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255,255,255, 0.6)',
              style: {
                backgroundColor: '#00507c'
              }
            }
          })
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  )

