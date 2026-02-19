import { RFValue } from "react-native-responsive-fontsize";

interface AppStyle {
  Fonts: Record<string, string>;
  FontSizes: (size: number) => number;
  Colors: Record<string, string>;
}
const AppStyle = {
  FontFamily: {
    PoppinsBlack: "Poppins-Black",
    PoppinsBold: "Poppins-Bold",
    PoppinsBoldItalic: "Poppins-BoldItalic",
    PoppinsExtraBold: "Poppins-ExtraBold",
    PoppinsExtraBoldItalic: "Poppins-ExtraBoldItalic",
    PoppinsExtraLight: "Poppins-ExtraLight",
    PoppinsExtraLightItalic: "Poppins-ExtraLightItalic",
    PoppinsItalic: "Poppins-Italic",
    PoppinsLight: "Poppins-Light",
    PoppinsLightItalic: "Poppins-LightItalic",
    PoppinsMedium: "Poppins-Medium",
    PoppinsMediumItalic: "Poppins-MediumItalic",
    PoppinsRegular: "Poppins-Regular",
    PoppinsSemiBold: "Poppins-SemiBold",
    PoppinsSemiBoldItalic: "Poppins-SemiBoldItalic",
    PoppinsThin: "Poppins-Thin",
  },
  FontSizes: (size: number) => {
    const scaled = RFValue(size);
    return scaled;
  },
  Colors: {
    white: "#FFFFFF",
    black: "#000000",
    primary: "#265A8F",
    lightGrey: "#808080",
    whiteSmoke: "#C0C0C0",
    red: "red",
    silverGray: "#e0e0e0",
    textPrimary: "#333333",
    textSecondary: "#666666",
    textMuted: "#999999",
    backgroundWhite:'#fafafa'
  },
};
export const FontFamily = AppStyle.FontFamily;
export const FontSizes = AppStyle.FontSizes;
export const Colors = AppStyle.Colors;
