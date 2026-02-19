import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { navigationRef } from './NavigationService';
import UserList from '../screens/user/UserList';
import UserDetails from '../screens/user/UserDetails';
import { NavKeys } from './NavKey';

const Stack = createNativeStackNavigator<RootStackParamList>();
type ScreenComponent = React.ComponentType<any>;

const AppStackNavigator = (
  name: keyof RootStackParamList,
  component: ScreenComponent,
  options?: any,
) => {
  return <Stack.Screen name={name} component={component} options={options} />;
};

const AppNavigator: React.FC = () => {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={NavKeys.USERS_LIST}
          screenOptions={{ headerShown: false }}
        >
          {AppStackNavigator(NavKeys.USERS_LIST, UserList)}
          {AppStackNavigator(NavKeys.USER_DETAILS, UserDetails)}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;
