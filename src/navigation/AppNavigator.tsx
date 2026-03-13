import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { navigationRef } from "./NavigationService";
import UserList from "../screens/user/UserList";
import UserDetails from "../screens/user/UserDetails";
import { NavKeys } from "./NavKey";
import Deals from "../screens/Deals/Deals";
import MyRewards from "../screens/NeighborhoodNetwork/MyRewards";
import BrandsOffersDetails from "../screens/NeighborhoodNetwork/BrandsOffersDetails";
import BrandsOffers from "../screens/NeighborhoodNetwork/BrandsOffers";
import NearYou from "../screens/NeighborhoodNetwork/NearYou";
import StakeNeighborhoodNetwork from "../screens/NeighborhoodNetwork/NeighborhoodNetwork";

const Stack = createNativeStackNavigator<RootStackParamList>();
type ScreenComponent = React.ComponentType<any>;

const AppStackNavigator = (
  name: keyof RootStackParamList,
  component: ScreenComponent,
  options?: any
) => {
  return <Stack.Screen name={name} component={component} options={options} />;
};

const AppNavigator: React.FC = () => {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={NavKeys.DEALS}
          screenOptions={{ headerShown: false }}
        >
          {/* {AppStackNavigator(NavKeys.USERS_LIST, UserList)}
          {AppStackNavigator(NavKeys.USER_DETAILS, UserDetails)} */}
          {AppStackNavigator(NavKeys.DEALS, Deals)}
          {AppStackNavigator(
            NavKeys.NEIGHBORHOOD_NETWORK,
            StakeNeighborhoodNetwork
          )}
          {AppStackNavigator(NavKeys.NEARYOU, NearYou)}
          {AppStackNavigator(NavKeys.BRANDS_OFFERS, BrandsOffers)}
          {AppStackNavigator(
            NavKeys.BRANDS_OFFERS_DETAILS,
            BrandsOffersDetails
          )}
          {AppStackNavigator(NavKeys.MY_REWARDS, MyRewards)}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;
