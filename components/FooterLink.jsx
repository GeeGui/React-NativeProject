import React from "react";
import { Text, TouchableHighlight, StyleSheet, View } from "react-native";

const FooterLink = ({ title, onPress }) => {
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <View style={styles.footerLinkContainer}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor="#00000000"
        onShowUnderlay={() => setIsPressed(true)}
        onHideUnderlay={() => setIsPressed(false)}
      >
        <Text
          style={[styles.footerLinkText, isPressed && styles.activeCustomBtn]}
        >
          {title}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  footerLinkContainer: {
    width: "50%",
    alignItems: "center",
  },
  footerLinkText: {
    fontWeight: "400",
    lineHeight: 34,
    color: "#ddd",
    marginBottom: 5,
    fontSize: 16,
    textAlign: "left",
  },
  activeCustomBtn: {
    color: "#fc5185",
  },
});

export default FooterLink;
