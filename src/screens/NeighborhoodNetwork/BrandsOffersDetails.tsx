import * as React from "react";
import { View, ScrollView } from "react-native";
import { GlobalStyles } from "../../styles/globalStyles";
import AppHeader from "../../components/CustomHeader";
import BrandsOffersDetailsComponent from "./Components/BrandsOffersDetailsComponent";
import { RouteProp } from "@react-navigation/native";
import { Offer } from "../../types";

type RouteParams = {
  item: Offer;
};
type Props = {
  route: RouteProp<{ params: RouteParams }, "params">;
};
const BrandsOffersDetails: React.FC<Props> = ({ route }) => {
  let { item } = route.params;
  return (
    <View style={GlobalStyles.globalContainer}>
      <AppHeader title="" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BrandsOffersDetailsComponent item={item} />
      </ScrollView>
    </View>
  );
};

export default BrandsOffersDetails;
