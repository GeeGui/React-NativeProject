import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FooterLink from "../../../components/FooterLink";

const Footer = () => {
  const handleLinkPress = () => {
    // Handle link press, e.g., navigate to a screen or open a URL
  };

  return (
    <View style={styles.footerBg}>
      <View style={styles.singleFooterWidget}>
        <Text style={styles.widgetTitle}>Practices</Text>
        <View style={styles.footerLinkWrapper}>
          <FooterLink title="For Patients" onPress={handleLinkPress} />
          <FooterLink title="FAQ's" onPress={handleLinkPress} />
          <FooterLink title="About" onPress={handleLinkPress} />
          <FooterLink title="Contact Me" onPress={handleLinkPress} />
          <FooterLink title="Blog" onPress={handleLinkPress} />
        </View>
      </View>

      <View style={styles.singleFooterWidget}>
        <Text style={styles.widgetTitle}>Resources</Text>
        <View style={styles.footerLinkWrapper}>
          <FooterLink title="New Patients" onPress={handleLinkPress} />
          <FooterLink title="Meet the team" onPress={handleLinkPress} />
          <FooterLink title="Patient Form" onPress={handleLinkPress} />
          <FooterLink title="Insurance" onPress={handleLinkPress} />
        </View>
      </View>

      <View style={styles.singleFooterWidget}>
        <Text style={styles.widgetTitle}>Address</Text>
        <View style={styles.footerLinkWrapper}>
          <FooterLink title="1355 Eden Ave Apt B12" onPress={handleLinkPress} />
          <FooterLink title="San Jose, CA 95117" onPress={handleLinkPress} />
          <FooterLink
            title="Phone:+1 (970) 513-000"
            onPress={handleLinkPress}
          />
          <FooterLink title="Email: john@yahoo.fr" onPress={handleLinkPress} />
          <FooterLink title="Fax: +1 675 5867 340" onPress={handleLinkPress} />
        </View>
      </View>

      <View style={styles.footerCopyRight}>
        <Text style={styles.copyRightText}>
          © 2023 - <Text style={styles.developer}>Guillain Nguilu</Text> | All
          Rights Reserved
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerBg: {
    backgroundColor: "#004caa",
  },
  singleFooterWidget: {
    paddingVertical: 20, // Adjusted for mobile, you can use different values
    paddingHorizontal: 10,
  },
  widgetTitle: {
    marginBottom: 30,
    fontSize: 30,
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
  footerLinkWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  footerCopyRight: {
    paddingVertical: 20,
    backgroundColor: "#1a60b6",
    alignItems: "center",
  },
  copyRightText: {
    color: "#fff",
    textAlign: "center",
  },
  developer: {
    color: "#fc5185",
  },
  // Add media query equivalent styles if necessary
});

export default Footer;
