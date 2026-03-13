import React from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import { SvgXml } from "react-native-svg";
import { searchIcon } from "../assets/images/svg/CommonIcons";

interface SearchInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  placeholder,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <SvgXml width={20} height={20} xml={searchIcon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="rgba(244, 253, 250, 0.5)"
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    gap: 8,
    borderRadius: 4,
    flexDirection: "row",
    borderColor: "rgba(244, 253, 250, 0.2)",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 1,
    height:46,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },

  icon: {
    width: 20,
    height: 20,
  },

  input: {
    flex: 1,
    color: "#f4fdfa",
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    height:48

  },
});
