import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import HomeScreen from '../screens/Home';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const Screens={LoginScreen: {
    screen:  LoginScreen
},

RegisterScreen: {
    screen:  RegisterScreen
},

HomeScreen: {
    screen:  HomeScreen
},};

const Navigator = createStackNavigator(Screens);
export default createAppContainer(Navigator);

