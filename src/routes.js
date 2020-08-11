import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Activate from './pages/activate';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
    Activate,
  }),
)

