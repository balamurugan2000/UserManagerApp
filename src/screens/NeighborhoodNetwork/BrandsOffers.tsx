import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
} from "react-native";
import { GlobalStyles } from "../../styles/globalStyles";
import AppHeader from "../../components/CustomHeader";
import SearchInput from "../../components/SearchInput";
import BrandOfferCard from "./Components/BrandOfferCard";
import { SvgXml } from "react-native-svg";
import {
  inStoreActiveIcon,
  inStoreIcon,
  onlineActiveIcon,
  onlineIcon,
} from "../../assets/images/svg/CommonIcons";
import { DATA_INSTORE, DATA_ONLINE } from "../../utils/Data";
import { Offer } from "../../types";


const BrandsOffers = () => {
  const [search, setSearch] = React.useState<string>("");
  const [tab, setTab] = React.useState<string>("instore");
  const [data, setData] = React.useState<Offer[]>(DATA_INSTORE);

  const filteredData = React.useMemo(() => {
    if (data?.length > 0)
      return data?.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    return [];
  }, [tab, search, data]);

  const ListEmptyComponent = React.useMemo(() => {
    return <></>;
  }, []);

  return (
    <View style={GlobalStyles.globalContainer}>
      <AppHeader title="Brands & Offers" />
      <View style={styles.planOptionsGroup}>
        <View style={styles.planOptions2}>
          <Pressable
            style={[
              styles.planFlexBox,
              tab === "instore" && styles.activeTabBackground,
            ]}
            onPress={() => {
              setTab("instore");
              setData(DATA_INSTORE);
            }}
          >
            <SvgXml xml={tab === "instore" ? inStoreActiveIcon : inStoreIcon} />
            <Text
              style={[
                styles.tabText,
                tab === "instore" && styles.activeTabText,
              ]}
            >
              In-Store
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.planFlexBox,
              tab === "online" && styles.activeTabBackground,
            ]}
            onPress={() => {
              setTab("online");
              setData(DATA_ONLINE);
            }}
          >
            <SvgXml xml={tab === "online" ? onlineActiveIcon : onlineIcon} />
            <Text
              style={[styles.tabText, tab === "online" && styles.activeTabText]}
            >
              Online
            </Text>
          </Pressable>
        </View>

        <SearchInput
          placeholder="Search by brands"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        initialNumToRender={4}
        ListEmptyComponent={ListEmptyComponent}
        renderItem={({ item }) => <BrandOfferCard item={item} type={tab} />}
      />
    </View>
  );
};

export default BrandsOffers;

const styles = StyleSheet.create({
  planOptionsGroup: {
    gap: 20,
    paddingTop: 20,
  },

  planOptions2: {
    flexDirection: "row",
    borderRadius: 9999,
    height: 43,
    borderWidth: 1,
    borderColor: "rgba(244, 253, 250, 0.2)",
  },

  planFlexBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999,
    gap: 10,
  },

  activeTabBackground: {
    backgroundColor: "#54ff99",
    borderWidth: 1,
    borderColor: "rgba(244, 253, 250, 0.2)",
  },

  tabText: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    lineHeight: 20,
    color: "#f4fdfa",
  },

  activeTabText: {
    color: "#282828",
  },
});
