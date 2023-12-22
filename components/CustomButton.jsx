import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

const CustomButton = ({
  title,
  routeName,
  customBtnStyle,
  customBtnTextStyle = {},
}) => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <TouchableHighlight
      underlayColor="white"
      onPress={() => navigation.navigate(routeName)}
      onShowUnderlay={() => setIsPressed(true)}
      onHideUnderlay={() => setIsPressed(false)}
      style={customBtnStyle}
    >
      <Text
        style={[
          customBtnTextStyle,
          styles.customBtn,
          isPressed && styles.activeCustomBtn,
        ]}
      >
        {title}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  customBtn: {
    fontSize: 18,
    fontWeight: "bold",
  },
  activeCustomBtn: {
    color: "black",
  },
});

export default CustomButton;
