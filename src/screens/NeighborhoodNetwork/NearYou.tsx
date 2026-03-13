import React, { useMemo, useRef, useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  ListRenderItem,
  Pressable,
} from "react-native";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { GlobalStyles } from "../../styles/globalStyles";
import MapViewComponent from "./Components/MapViewComponent";
import AppHeader from "../../components/CustomHeader";
import SearchInput from "../../components/SearchInput";
import BrandOfferCard from "./Components/BrandOfferCard";
import BrandsOffersDetailsComponent from "./Components/BrandsOffersDetailsComponent";
import { SvgXml } from "react-native-svg";
import { closeIcon } from "../../assets/images/svg/CommonIcons";
import { DATA_INSTORE, locations } from "../../utils/Data";
import { Offer } from "../../types";


const NearYou: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<Offer | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["40%", "65"], []);
  const filteredData = useMemo<Offer[]>(() => {
    return DATA_INSTORE.filter((item: Offer) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleSelected = useCallback((item: Offer) => {
    console.log("item", item);
    setSelectedItem(item);
  }, []);

  const renderItem: ListRenderItem<Offer> = useCallback(
    ({ item }: { item: any }) => (
      <BrandOfferCard item={item} handleSelected={handleSelected} />
    ),
    []
  );

  return (
    <View style={GlobalStyles.globalContainer}>
      <AppHeader title="Near you" />

      {/* MAP */}
      <View style={styles.mapContainer}>
        <MapViewComponent locations={locations} />
      </View>

      {/* BOTTOM SHEET */}
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        backgroundStyle={styles.sheetBackground}
        handleIndicatorStyle={styles.handle}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        enableDynamicSizing={false}
      >
        {selectedItem ? (
          <BottomSheetScrollView
            style={{ paddingHorizontal: 20, paddingBottom: 20 }}
          >
            <Pressable
              style={{ alignSelf: "flex-end" }}
              onPress={() => {
                setSelectedItem(null);
              }}
            >
              <SvgXml xml={closeIcon} />
            </Pressable>
            <BrandsOffersDetailsComponent item={selectedItem} />
          </BottomSheetScrollView>
        ) : (
          <BottomSheetFlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item: Offer) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.sheetContent}
            initialNumToRender={6}
            ListHeaderComponent={
              <SearchInput
                placeholder="Search by brands"
                value={search}
                onChangeText={setSearch}
              />
            }
          />
        )}
      </BottomSheet>
    </View>
  );
};

export default NearYou;

/* ---------- STYLES ---------- */

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    marginHorizontal: -20,
    paddingTop: 10,
  },

  sheetBackground: {
    backgroundColor: "#212737",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  handle: {
    backgroundColor: "rgba(244,253,250,0.3)",
    width: 48,
  },

  sheetContent: {
    padding: 20,
    gap: 20,
  },
});
