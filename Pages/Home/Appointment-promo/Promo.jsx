import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import promoBanner from "../../../Images/doctor-nurse.png";

const Promo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.promoWrapper}>
      <View style={styles.container}>
        <View style={[styles.column, styles.leftColumn]}>
          <View style={styles.promoContent}>
            <Text style={styles.heading}>
              Request your appointment and start your smile makeover!
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("NotFound")}
              style={styles.themeButton}
            >
              <Text style={styles.buttonText}>Request Appointment</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.column, styles.rightColumn]}>
          <View style={styles.promoBanner}>
            <Image source={promoBanner} style={styles.bannerImage} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  promoWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "#004caa",
  },
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
  },
  leftColumn: {},
  promoContent: {
    marginBottom: 30,
  },
  heading: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  themeButton: {
    backgroundColor: "#fc5185",
    padding: 8,
    borderRadius: 3,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  rightColumn: {},
  promoBanner: {},
  bannerImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
});

export default Promo;
