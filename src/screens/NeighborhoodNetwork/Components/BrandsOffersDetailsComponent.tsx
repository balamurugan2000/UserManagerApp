import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MapViewComponent from "./MapViewComponent";
import { Offer } from "../../../types";
import { locations } from "../../../utils/Data";


type Props = {
  item: Offer;
};

const BrandsOffersDetailsComponent: React.FC<Props> = ({ item }) => {
  return (
    <>
      <View style={[styles.frameGroup, styles.parentFlexBox]}>
        <View style={styles.frameContainer}>
          <View style={styles.embersTapHouseParent}>
            <Text style={styles.embersTapHouse}>{item?.name}</Text>
            <View style={[styles.cashBackUpTo10Parent, styles.parentFlexBox]}>
              <Text style={styles.cashBackUp}>{item?.cashback}</Text>
              <Text style={[styles.min, styles.minTypo]}>{item?.min}</Text>
            </View>
          </View>
          <View style={[styles.badge, styles.badgeFlexBox]}>
            <Image style={styles.frameIcon} resizeMode="cover" />
            <Text style={[styles.online, styles.minTypo]}>Online</Text>
          </View>
          <View style={[styles.badge2, styles.badgeFlexBox]}>
            <Text style={[styles.online, styles.minTypo]}>
              {item?.stakeCashback}
            </Text>
          </View>
        </View>
        <Image
          source={item?.image}
          style={styles.visaMaster}
          resizeMode="cover"
        />
      </View>
      <View style={styles.offerDetailsParent}>
        <Text style={styles.offerDetails}>Offer details</Text>
        <View style={styles.inputFieldContainerParent}>
          <View style={[styles.inputFieldContainer, styles.parentFlexBox]}>
            <Text style={[styles.inputPlaceholder, styles.inputTypo]}>
              Expires on
            </Text>
            <Text style={[styles.inputPlaceholder2, styles.inputTypo]}>
              {item?.offerDetails?.expires}
            </Text>
          </View>
          <View style={[styles.inputFieldContainer, styles.parentFlexBox]}>
            <Text style={[styles.inputPlaceholder, styles.inputTypo]}>
              Location
            </Text>
            <Text style={[styles.inputPlaceholder4, styles.inputTypo]}>
              {item?.offerDetails?.location}
            </Text>
          </View>
          <View style={[styles.inputFieldContainer, styles.parentFlexBox]}>
            <Text style={[styles.inputPlaceholder, styles.inputTypo]}>
              Networks
            </Text>
            <View style={[styles.cardIconParent, styles.parentFlexBox]}>
              <Image
                source={item?.offerDetails?.networks[0]}
                style={styles.cardIcon}
                resizeMode="cover"
              />
              <Image
                source={item?.offerDetails?.networks[0]}
                style={styles.cardIcon}
                resizeMode="cover"
              />
              <Image
                source={item?.offerDetails?.networks[0]}
                style={styles.cardIcon}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>
      </View>
      {item.type && (
        <View style={styles.mapView}>
          <MapViewComponent locations={locations} />
        </View>
      )}

      <View style={styles.termsConditionsParent}>
        <Text style={styles.offerDetails}>Terms & Conditions</Text>

        <Text style={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc leo
          dolor, rutrum et nisi eu, interdum accumsan augue. Aliquam porttitor,
          nisi nec pharetra porta, nibh nisl tincidunt quam, non ornare arcu
          lectus sed augue. In massa odio, semper quis dui nec, posuere commodo
          neque. Mauris posuere augue nec nisl varius, blandit luctus dui
          ultrices. Sed eleifend tincidunt odio in volutpat. Ut augue nisi,
          elementum a placerat convallis, rutrum et ipsum. Maecenas ac mauris
          vehicula, rutrum lectus commodo, efficitur urna. Mauris nec justo
          viverra, porttitor orci vitae, efficitur lorem.
        </Text>
      </View>
    </>
  );
};
export default BrandsOffersDetailsComponent;
const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  minTypo: {
    fontSize: 10,
    lineHeight: 12,
    textAlign: "left",
  },

  badgeFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    justifyContent: "center",
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: "#186547",
  },

  inputTypo: {
    fontSize: 13,
    lineHeight: 16,
    color: "#f4fdfa",
  },

  frameGroup: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    gap: 12,
    paddingVertical: 30,
  },

  frameContainer: {
    flex: 1,
    gap: 10,
  },

  embersTapHouseParent: {
    gap: 6,
    alignSelf: "stretch",
  },

  embersTapHouse: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    color: "#f4fdfa",
    textAlign: "left",
  },

  cashBackUpTo10Parent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  cashBackUp: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Poppins-Regular",
    color: "#f4fdfa",
  },

  min: {
    color: "#d1d1d1",
    fontFamily: "Poppins-Regular",
  },

  badge: {
    borderRadius: 2,
    display: "none",
  },

  badge2: {
    borderRadius: 9999,
    overflow: "hidden",
  },

  frameIcon: {
    width: 12,
    height: 12,
  },

  online: {
    color: "#54ff99",
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
  },

  visaMaster: {
    width: 68,
    height: 68,
    borderRadius: 4,
    backgroundColor: "white",
  },

  offerDetailsParent: {
    gap: 4,
    alignSelf: "stretch",
  },

  offerDetails: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    color: "#fff",
    textAlign: "left",
    alignSelf: "stretch",
  },

  inputFieldContainerParent: {
    alignSelf: "stretch",
  },

  inputFieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "rgba(244, 253, 250, 0.2)",
    overflow: "hidden",
  },

  inputPlaceholder: {
    fontFamily: "Poppins-Regular",
    textAlign: "left",
  },

  inputPlaceholder2: {
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
  },

  inputPlaceholder4: {
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    textAlign: "right",
  },

  cardIconParent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  cardIcon: {
    width: 24,
    height: 24,
    borderRadius: 4,
  },

  mapView: {
    width: "100%",
    height: 200,
    borderRadius: 6,
    marginVertical: 20,
    alignSelf: "stretch",
    overflow: "hidden",
  },

  termsConditionsParent: {
    gap: 8,
    alignSelf: "stretch",
  },

  loremIpsumDolor: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: "Poppins-Regular",
    color: "#fff",
    textAlign: "left",
  },
});
