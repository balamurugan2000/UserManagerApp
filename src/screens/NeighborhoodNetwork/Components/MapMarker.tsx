import React from "react";
import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";

type Props = {
  icon: ImageSourcePropType;
};

const MapMarker: React.FC<Props> = ({ icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.marker}>
        <Image source={icon} style={styles.icon} />
      </View>
      <View style={styles.pointer} />
    </View>
  );
};

export default MapMarker;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  marker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  pointer: {
    width: 8,
    height: 8,
    backgroundColor: "#fff",
    transform: [{ rotate: "45deg" }],
    marginTop: -4,
  },
});