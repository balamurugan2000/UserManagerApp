import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Mapbox from "@rnmapbox/maps";
import { MAPBOX_ACCESS_TOKEN } from "../../../utils/Config";

Mapbox.setAccessToken(MAPBOX_ACCESS_TOKEN);

export type Location = {
  id: string;
  type: "gas" | "restaurant" | "food";
  coordinate: [number, number];
};

type Props = {
  locations: Location[];
};

const MapViewComponent: React.FC<Props> = ({ locations }) => {
  return (
    <View style={styles.container}>
      <Mapbox.MapView style={styles.map} styleURL={Mapbox.StyleURL.Outdoors}>
        <Mapbox.Camera zoomLevel={13} centerCoordinate={[-95.406, 29.708]} />
        {locations.map((item) => (
          <Mapbox.PointAnnotation
            key={item.id}
            id={item.id}
            coordinate={item.coordinate}
          >
            {/* <Image
              source={require("../../../assets/images/png/3425073.png")}
              style={{ width: 30, height: 30 }}
            /> */}
          </Mapbox.PointAnnotation>
        ))}
      </Mapbox.MapView>
    </View>
  );
};

export default MapViewComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    flex: 1,
  },
});
