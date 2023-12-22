import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const FormInput = ({ placeholder, keyboardType, multiline, numberOfLines }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <TextInput
      style={[
        styles.input,
        multiline && styles.textArea,
        isFocused && styles.focusedInput,
      ]}
      placeholder={placeholder}
      keyboardType={keyboardType}
      multiline={multiline}
      numberOfLines={numberOfLines}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#CCCCCC",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  focusedInput: {
    borderColor: "#ffc107",
  },
});

export default FormInput;
