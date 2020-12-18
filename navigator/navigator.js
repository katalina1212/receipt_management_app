import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import HomeScreen from '../screens/Home';
import SaveReceiptScreen from '../screens/SaveReceiptScreen';
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
},

SaveReceiptScreen: {
    screen:  SaveReceiptScreen
},
};

const Navigator = createStackNavigator(Screens);
export default createAppContainer(Navigator);

