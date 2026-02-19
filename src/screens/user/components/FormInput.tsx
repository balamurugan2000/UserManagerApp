import React from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
} from "react-native";
import { styles } from "../Styles";

interface Props extends TextInputProps {
  label: string;
  error?: string;
}

const FormInput: React.FC<Props> = ({ label, error, ...props }) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formLabel}>{label}</Text>
      <TextInput
        style={[styles.formInput, error && styles.formErrorInput]}
        {...props}
      />
      {!!error && <Text style={styles.formErrorText}>{error}</Text>}
    </View>
  );
};

export default FormInput;
