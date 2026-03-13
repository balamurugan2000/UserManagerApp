import * as React from "react";
import { StyleSheet, View, Text, Image, ScrollView, Pressable } from "react-native";
import { Colors } from "../../styles/AppStyle";
import { SvgXml } from "react-native-svg";
import {
  profileIcon,
  rightArrowIconWithGreenColorIcon,
} from "../../assets/images/svg/CommonIcons";
import { GlobalStyles } from "../../styles/globalStyles";
import { navigate } from "../../navigation/NavigationService";
import { NavKeys } from "../../navigation/NavKey";

const Deals = () => {
  return (
    <>
      <View style={[GlobalStyles.globalContainer]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.frameParent, styles.action2FlexBox]}>
            <View style={styles.wallet160Wrapper}>
              <Text style={[styles.wallet160, styles.textTypo]}>
                Wallet: $160
              </Text>
            </View>
            <View style={styles.closeIcon}>
              <SvgXml width={20} height={20} xml={profileIcon} />
            </View>
          </View>
          <View style={styles.letsUseSomeOfThatCashParent}>
            <Text style={[styles.letsUseSome, styles.letsUseSomeClr]}>
              Let's use some of that cash...
            </Text>
            <View style={styles.dealCardWrapper}>
              <View style={styles.dealCardBorder}>
                <View style={styles.container}>
                  <View style={styles.dealIcon}>
                    <Image
                      source={require("../../assets/images/png/2fba4601ee987bf9e9d024163c15bcd4b68c0ec0.png")}
                      style={[styles.bankIcon, styles.headerPosition]}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.content}>
                    <View style={styles.textGroup}>
                      <Text style={styles.title}>Get Cash, Build Credit</Text>
                    </View>
                    <Text style={[styles.description, styles.actionTextTypo]}>
                      Boost credit, earn unlimited Cash Back, free checking, and
                      more.
                    </Text>
                  </View>
                </View>
                <View style={[styles.action, styles.actionFlexBox]}>
                  <Text style={[styles.actionText, styles.textTypo]}>
                    Join Stake Saver
                  </Text>
                  <SvgXml xml={rightArrowIconWithGreenColorIcon} />
                </View>
              </View>
            </View>

            <Text style={[styles.letsUseSome, styles.letsUseSomeClr]}>
              Activated Deals
            </Text>
            <View style={styles.dealCardBorder}>
              <View style={styles.container2}>
                <View style={styles.dealIcon}>
                  <Image
                    source={require("../../assets/images/png/7c70d38f33e36324775652f851020a093e44af72.png")}
                    style={[styles.bankIcon, styles.headerPosition]}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.content}>
                  <View style={styles.textGroup}>
                    <Text style={styles.title}>{`Neighborhood Network `}</Text>
                  </View>
                  <Text style={[styles.description, styles.actionTextTypo]}>
                    Link any debit or credit card and earn up to 10% Cash Back
                    and thousands more in potential rewards on 35,000+ brands.
                  </Text>
                </View>
              </View>
              <Pressable style={[styles.action2, styles.action2FlexBox]}
              onPress={()=>{
                navigate(NavKeys.NEIGHBORHOOD_NETWORK)
              }}
              >
                <Text style={[styles.actionText, styles.textTypo]}>View</Text>
                <SvgXml xml={rightArrowIconWithGreenColorIcon} />
              </Pressable>
              <View style={styles.badge}>
                <View style={styles.blurview}>
                  <View style={styles.view} />
                </View>
                <Text style={[styles.badgeText, styles.textTypo]}>
                  Activated
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
 
  letsUseSomeClr: {
    color: "#f4fdfa",
    alignSelf: "stretch",
    marginVertical: 12,
  },
  headerPosition: {
    left: "50%",
    position: "absolute",
  },
  actionTextTypo: {
    fontSize: 16,
    lineHeight: 24,
  },
  actionFlexBox: {
    gap: 2,
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  textTypo: {
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    color: "#54ff99",
  },
  action2FlexBox: {
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bg2Layout: {
    width: 390,
    top: 0,
  },
  bg2Position: {
    left: 0,
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    height: 12,
    top: 1,
    left: "50%",
    position: "absolute",
  },
  deals: {
    boxShadow: "0px 4px 8px rgba(20, 21, 26, 0.1)",

    flex: 1,
  },

  letsUseSomeOfThatCashParent: {
    flex: 1,
  },
  letsUseSome: {
    fontSize: 20,
    lineHeight: 28,
    textAlign: "left",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    color: "#f4fdfa",
  },
  dealCardWrapper: {
    alignSelf: "stretch",
  },
  dealCardBorder: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderColor: "rgba(244, 253, 250, 0.2)",
    borderRadius: 12,
    alignItems: "flex-end",
    alignSelf: "stretch",
    gap: 12,
    backgroundColor: "#212737",
    borderWidth: 1,
    borderStyle: "solid",
  },
  container: {
    alignItems: "center",
    alignSelf: "stretch",
    gap: 12,
  },
  dealIcon: {
    height: 64,
    width: 64,
  },
  bankIcon: {
    marginLeft: -32,
    maxHeight: "100%",
    width: 64,
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  content: {
    gap: 6,
    alignItems: "center",
    alignSelf: "stretch",
  },
  textGroup: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    color: "#54ff99",
    lineHeight: 24,
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    alignSelf: "stretch",
  },
  description: {
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    color: "#f4fdfa",
    alignSelf: "stretch",
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    flex: 1,
    textAlign: "right",
    display: "flex",
    justifyContent: "flex-end",
    fontSize: 16,
    lineHeight: 24,
    alignItems: "center",
  },
  commonIcons: {
    width: 16,
    height: 16,
    backgroundColor: "red",
  },
  container2: {
    zIndex: 0,
    alignItems: "center",
    alignSelf: "stretch",
    gap: 12,
  },
  action2: {
    gap: 2,
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  badge: {
    top: 16,
    right: 16,
    borderRadius: 50,
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  blurview: {
    opacity: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    position: "absolute",
  },
  view: {
    backgroundColor: "#186547",
    height: "100%",
    width: "100%",
  },
  badgeText: {
    fontSize: 10,
    lineHeight: 12,
    textAlign: "left",
  },
  header: {
    marginLeft: -195,
    height: 111,
    paddingBottom: 16,
    gap: 24,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
    alignItems: "flex-end",
    width: 390,
    overflow: "hidden",
  },
  bg2: {
    width: 390,
    top: 0,
    zIndex: 0,
    backgroundColor: "#212737",
    boxShadow: "inset 0px -538px 250px rgba(9, 12, 21, 0.65)",
    height: 844,
    left: 0,
  },
  frameParent: {
    gap: 8,
    paddingBottom: 10,
  },
  wallet160Wrapper: {
    borderRadius: 48,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#186547",
  },
  wallet160: {
    fontSize: 13,
    lineHeight: 16,
    textAlign: "center",
  },
  closeIcon: {
    height: 36,
    width: 36,
    borderRadius: 100,
    backgroundColor: "rgba(244, 253, 250, 0.10)",
    justifyContent: "center",
    alignItems: "center",
  },
  statusbarIphone13: {
    height: 47,
    width: 390,
    top: 0,
    overflow: "hidden",
  },
  leftSide: {
    marginLeft: -168,
    top: 14,
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: 24,
    top: 0,
  },
  text: {
    fontSize: 17,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontFamily: "SF Pro Text",
    color: "#fff",
    height: 20,
    top: 1,
    width: 54,
    left: 0,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  rightSide: {
    marginLeft: 91,
    top: 19,
    width: 77,
  },
  batteryIcon: {
    marginLeft: 11,
    width: 27,
    top: 0,
  },
  wifiIcon: {
    marginLeft: -13,
    width: 17,
  },
  iconMobileSignal: {
    marginLeft: -39,
    width: 18,
  },
  homeIndicator: {
    right: 0,
    bottom: 0,
    height: 26,
  },
  homeIndicator2: {
    marginLeft: -67,
    bottom: 8,
    backgroundColor: "#fff",
    width: 134,
    height: 5,
    borderRadius: 100,
  },
});

export default Deals;
