import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import AppHeader from "../../components/CustomHeader";
import { GlobalStyles } from "../../styles/globalStyles";
import { SvgXml } from "react-native-svg";
import {
  brandsOffersIcon,
  mapExpandLinkIcon,
  myCardIcon,
  myRewardsIcon,
  rightArrowIcon,
} from "../../assets/images/svg/CommonIcons";
import Mapbox from "@rnmapbox/maps";
import { MAPBOX_ACCESS_TOKEN } from "../../utils/Config";
import MapViewComponent from "./Components/MapViewComponent";
import { navigate } from "../../navigation/NavigationService";
import { NavKeys } from "../../navigation/NavKey";
import { locations } from "../../utils/Data";

Mapbox.setAccessToken(MAPBOX_ACCESS_TOKEN);



const StakeNeighborhoodNetwork = () => {
  return (
    <View style={GlobalStyles.globalContainer}>
      <AppHeader title="Neighborhood Network" />
      <ScrollView>
        <View style={styles.frameParentFlexBox}>
          <View style={styles.browseMerchantsNearYouParent}>
            <Text style={styles.browseMerchantsNear}>
              Browse merchants near you
            </Text>
            <Pressable
              style={styles.tapToExpandTheMapToFindParent}
              onPress={() => navigate(NavKeys.NEARYOU)}
            >
              <Text style={[styles.tapToExpand, styles.tapToExpandTypo]}>
                Tap to expand the map to find offers near you
              </Text>
              <SvgXml xml={mapExpandLinkIcon} />
            </Pressable>
          </View>
          <View style={styles.mapView}>
            <MapViewComponent locations={locations} />
          </View>
        </View>
        <Pressable style={styles.applepayDetailcardParent}>
          <Pressable
            style={[styles.applepayDetailcard, styles.frameParentFlexBox]}
          >
            <SvgXml xml={myCardIcon} />
            <View style={styles.content}>
              <View style={styles.details}>
                <Text style={styles.myCards}>My Cards</Text>
                <Text style={[styles.linkYourCredit, styles.tapToExpandTypo]}>
                  Link your credit or debit cards securely.
                </Text>
              </View>
              <SvgXml xml={rightArrowIcon} />
            </View>
          </Pressable>
          <Pressable
            style={[styles.applepayDetailcard, styles.frameParentFlexBox]}
            onPress={() => navigate(NavKeys.BRANDS_OFFERS)}
          >
            <SvgXml xml={brandsOffersIcon} />
            <View style={styles.content}>
              <View style={styles.details}>
                <Text style={styles.myCards}>{`Brands & Offers`}</Text>
                <Text style={[styles.linkYourCredit, styles.tapToExpandTypo]}>
                  Find deals and earn rewards effortlessly.
                </Text>
              </View>
              <SvgXml xml={rightArrowIcon} />
            </View>
          </Pressable>
          <Pressable
            style={[styles.applepayDetailcard, styles.frameParentFlexBox]}
            onPress={() => navigate(NavKeys.MY_REWARDS)}
          >
            <SvgXml xml={myRewardsIcon} />
            <View style={styles.content}>
              <View style={styles.details}>
                <Text style={styles.myCards}>My Rewards</Text>
                <Text style={[styles.linkYourCredit, styles.tapToExpandTypo]}>
                  See how much you’ve earned so far.
                </Text>
              </View>
              <SvgXml xml={rightArrowIcon} />
            </View>
          </Pressable>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default StakeNeighborhoodNetwork;

const styles = StyleSheet.create({
  tapToExpandTypo: {
    color: "#d1d1d1",
    fontFamily: "Poppins-Regular",
    textAlign: "left",
  },

  frameParentFlexBox: {
    gap: 12,
    alignSelf: "stretch",
    paddingTop: 20,
  },

  browseMerchantsNearYouParent: {
    gap: 6,
    alignSelf: "stretch",
  },

  browseMerchantsNear: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: "#f4fdfa",
    fontWeight: "600",
    lineHeight: 24,
  },

  tapToExpandTheMapToFindParent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    alignSelf: "stretch",
  },

  tapToExpand: {
    fontSize: 14,
    lineHeight: 20,
  },

  mapView: {
    height: 200,
    borderRadius: 6,
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    marginBottom: 25,
    marginTop: 10,
  },

  applepayDetailcardParent: {
    width: "100%",
    gap: 20,
  },

  applepayDetailcard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderColor: "rgba(244, 253, 250, 0.2)",
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 20,
    backgroundColor: "#212737",
  },

  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  details: {
    flex: 1,
    gap: 4,
    alignItems: "flex-start",
  },

  myCards: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    lineHeight: 20,
    color: "#f4fdfa",
    textAlign: "center",
  },

  linkYourCredit: {
    fontSize: 13,
    lineHeight: 16,
  },
});
