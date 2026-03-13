import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppHeader from "../../components/CustomHeader";
import { GlobalStyles } from "../../styles/globalStyles";
const MyRewards = () => {
  return (
    <View style={GlobalStyles.globalContainer}>
      <AppHeader title="My Rewards" />
      <View style={styles.container}>
        <View style={[styles.container2, styles.containerFlexBox]}>
          <View style={styles.infoContainer}>
            <Text style={[styles.title, styles.titleTypo]}>
              Embers Tap House
            </Text>
            <Text style={styles.date}>September 02, 2025 09:36</Text>
          </View>
          <Text style={[styles.price, styles.titleTypo]}>$5.00</Text>
        </View>
        <View style={[styles.container2, styles.containerFlexBox]}>
          <View style={styles.infoContainer}>
            <Text style={[styles.title, styles.titleTypo]}>
              Ocean Breeze Café
            </Text>
            <Text style={styles.date}>September 02, 2025 10:15</Text>
          </View>
          <Text style={[styles.price, styles.titleTypo]}>$7.50</Text>
        </View>
        <View style={[styles.container2, styles.containerFlexBox]}>
          <View style={styles.infoContainer}>
            <Text style={[styles.title, styles.titleTypo]}>
              Mountain View Diner
            </Text>
            <Text style={styles.date}>September 02, 2025 11:00</Text>
          </View>
          <Text style={[styles.price, styles.titleTypo]}>$8.25</Text>
        </View>
        <View style={[styles.container2, styles.containerFlexBox]}>
          <View style={styles.infoContainer}>
            <Text style={[styles.title, styles.titleTypo]}>Sunset Grill</Text>
            <Text style={styles.date}>September 02, 2025 12:45</Text>
          </View>
          <Text style={[styles.price, styles.titleTypo]}>$6.75</Text>
        </View>
        <View style={styles.containerFlexBox}>
          <View style={styles.infoContainer}>
            <Text style={[styles.title, styles.titleTypo]}>
              Riverside Bistro
            </Text>
            <Text style={styles.date}>September 02, 2025 13:30</Text>
          </View>
          <Text style={[styles.price, styles.titleTypo]}>$9.00</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerFlexBox: {
    gap: 12,
    paddingBottom: 20,
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
  },
  titleTypo: {
    color: "#f4fdfa",
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    textAlign: "left",
  },

  myRewards: {
    boxShadow: "0px 4px 8px rgba(20, 21, 26, 0.1)",
    elevation: 8,
    borderColor: "rgba(20, 21, 26, 0.1)",
    borderWidth: 1,
    overflow: "hidden",
    borderStyle: "solid",
    height: 844,
    width: "100%",
  },
  container: {
    gap: 20,
    marginTop: 20,
  },
  container2: {
    borderColor: "rgba(244, 253, 250, 0.2)",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  infoContainer: {
    gap: 6,
    flex: 1,
  },
  title: {
    fontSize: 13,
    lineHeight: 16,
    textAlign: "left",
  },
  date: {
    fontSize: 10,
    lineHeight: 12,
    fontFamily: "Poppins-Regular",
    color: "#d1d1d1",
    textAlign: "left",
  },
  price: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
  },
});

export default MyRewards;
