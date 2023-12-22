import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const ContactItem = ({ iconName, iconColor, heading, text1, text2 }) => {
  return (
    <View style={styles.contactColumn}>
      <View style={styles.singleContact}>
        <View style={[styles.cIcon, { backgroundColor: iconColor }]}>
          <FontAwesome5 name={iconName} size={24} color="white" />
        </View>
        <View style={styles.cInfo}>
          <Text style={styles.infoHeading}>{heading}</Text>
          <Text style={styles.infoText}>{text1}</Text>
          {text2 && <Text style={styles.infoText}>{text2}</Text>}
        </View>
      </View>
    </View>
  );
};

const ContactUs = () => {
  return (
    <View style={styles.contactUsWrapper}>
      <View style={styles.container}>
        {/* Section title */}
        <View style={styles.sectionTitle}>
          <Text style={styles.title}>Contact Me</Text>
        </View>
        {/* Contact columns */}
        <ContactItem
          iconName="home"
          iconColor="#fc5185"
          heading="Address"
          text1="55 West, 33rd Street"
          text2="5th Floor, New York"
        />
        <ContactItem
          iconName="envelope"
          iconColor="#4CAF50"
          heading="Email"
          text1="info@dentzone.com"
          text2="email@gmail.com"
        />
        <ContactItem
          iconName="phone"
          iconColor="#2196F3"
          heading="Phone"
          text1="(888) 4421-1238-32"
          text2="(888) 838-1238-645"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactUsWrapper: {
    padding: 20,
    backgroundColor: "white",
  },
  container: {},
  sectionTitle: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  contactColumn: {
    borderColor: "#888",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    marginBottom: 15, // Add space between items
  },
  singleContact: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  cIcon: {
    padding: 10,
    borderRadius: 50,
  },
  cInfo: {
    justifyContent: "center",
    marginLeft: 10, // Add space between icon and text
  },
  infoHeading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 16,
  },
  // ... any other styles you need
});

export default ContactUs;
