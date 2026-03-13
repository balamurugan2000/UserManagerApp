import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { navigate } from "../../../navigation/NavigationService";
import { Offer } from "../../../types";

interface Props {
  item: Offer;
  type?: string;
  handleSelected?: any;
}

const BrandOfferCard: React.FC<Props> = ({ item, type, handleSelected }) => {
  let { name, cashback, min, stakeCashback, distance, days, image } = item;
  return (
    <Pressable
      style={[styles.connectedCard, styles.connectedCardFlexBox]}
      onPress={() => {
        if (handleSelected) {
          handleSelected({ ...item, type });
        } else {
          navigate("BrandsOffersDetails", { item: { ...item, type } });
        }
      }}
    >
      <View style={[styles.visaMasterParent, styles.connectedCardFlexBox]}>
        <Image source={image} style={styles.visaMaster} resizeMode="cover" />
        <View style={styles.frameParent5}>
          <View style={styles.embersTapHouseParent}>
            <Text style={[styles.embersTapHouse, styles.textTypo]}>{name}</Text>
            <View style={styles.cashBackParent}>
              <Text style={[styles.cashBack, styles.mTWTFTypo]}>
                {cashback}
              </Text>
              <Text style={[styles.min, styles.minTypo]}>{min}</Text>
            </View>
          </View>
          <View style={[styles.badge, styles.badgeSpaceBlock]}>
            <Text style={[styles.stakeVisaDebit, styles.minTypo]}>
              {stakeCashback}
            </Text>
          </View>
        </View>
        <View style={styles.milesAwayParent}>
          <Text style={styles.milesAway}>{distance}</Text>
          {type === "instore" && <Text style={styles.mTWTF5}>{days}</Text>}
        </View>
      </View>
    </Pressable>
  );
};

export default BrandOfferCard;

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
  },

  allTypo: {
    lineHeight: 12,
    textAlign: "left",
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
  },
  connectedCardFlexBox: {
    gap: 16,
    flexDirection: "row",
  },
  mTWTFTypo: {
    lineHeight: 16,
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#f4fdfa",
    textAlign: "left",
  },
  minTypo: {
    fontSize: 10,
    lineHeight: 12,
    textAlign: "left",
  },
  badgeSpaceBlock: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: "#186547",
    alignSelf: "flex-start",
  },
  frameIconLayout: {
    width: 10,
    height: 10,
  },
  badgeFlexBox: {
    borderRadius: 2,
    gap: 4,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },

  frameIcon4: {
    width: 12,
    height: 12,
  },

  connectedCard: {
    borderBottomWidth: 1,
    paddingVertical: 24,
    gap: 16,
    alignSelf: "stretch",
    borderColor: "rgba(244, 253, 250, 0.2)",
    borderStyle: "solid",
  },
  visaMasterParent: {
    flex: 1,
  },
  visaMaster: {
    height: 68,
    width: 68,
    borderRadius: 4,
    backgroundColor: "white",
  },
  frameParent5: {
    gap: 8,
    flex: 1,
  },
  embersTapHouseParent: {
    gap: 4,
    alignSelf: "stretch",
  },
  embersTapHouse: {
    color: "#f4fdfa",
    alignSelf: "stretch",
  },
  cashBackParent: {
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  cashBack: {
    fontFamily: "Poppins-Regular",
  },
  min: {
    color: "#d1d1d1",
    fontFamily: "Poppins-Regular",
  },
  badge: {
    gap: 4,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 9999,
    alignItems: "center",
    overflow: "hidden",
  },
  frameIcon8: {
    display: "none",
  },
  stakeVisaDebit: {
    color: "#54ff99",
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    fontSize: 10,
  },
  badge2: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: "#186547",
    display: "none",
  },
  mTWTFParent: {
    alignItems: "flex-end",
    gap: 8,
    justifyContent: "center",
    display: "none",
  },
  mTWTF: {
    fontFamily: "Poppins-Regular",
    display: "none",
  },
  badge3: {
    borderWidth: 1,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderColor: "rgba(244, 253, 250, 0.2)",
    borderStyle: "solid",
    backgroundColor: "#212737",
  },
  online2: {
    fontSize: 8,
    color: "#f4fdfa",
  },
  milesAwayParent: {
    // maxWidth: 80,
    alignItems: "flex-end",
    gap: 4,
    justifyContent: "flex-start",
  },
  milesAway: {
    textAlign: "right",
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    lineHeight: 16,
    color: "#f4fdfa",
  },
  mTWTF5: {
    display: "flex",
    justifyContent: "flex-end",
    textAlign: "right",
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    lineHeight: 16,
    // width: 68,
    color: "#f4fdfa",
    alignItems: "center",
  },
});
