import { StyleSheet } from "react-native";
import { Colors } from "./AppStyle";

export const GlobalStyles = StyleSheet.create({
    globalContainer: {
        flex: 1,
        backgroundColor: Colors.primary,
        boxShadow: "inset 0px -538px 250px rgba(9, 12, 21, 0.65)",
        padding: 20,
        paddingTop: 50,
    },

})