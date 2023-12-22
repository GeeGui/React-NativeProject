import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import serviceDetailImg from "../../../Images/service-details-promo1.png";

import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_600SemiBold,
} from "@expo-google-fonts/josefin-sans";

import NotFound from "../../NotFound/NotFound";
import CustomButton from "../../../components/CustomButton";

const About = () => {
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_600SemiBold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        // Artificially delay for demonstration purposes
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the splash screen to hide
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.aboutWrapper}>
      <View style={styles.container}>
        <View style={styles.column}>
          <View style={styles.aboutRight}>
            <View style={styles.aboutContent}>
              <Text style={styles.header}>Welcome to our team</Text>
              <Text style={styles.paragraph}>
                Welcome to Datobbo Dental represents everything going to dentist
                necessary. We have upgraded your dreaded dentist appointment and
                transformed it into a relaxing. Consectetur adipisicing elit.
                Quod ea, consequuntur itaque enim et expedita, optio omnis ipsa
                magni, perspiciatis totam ipsum! Voluptatibus, neque at.
              </Text>
            </View>
            <View style={styles.aboutUsWrapper}>
              <CustomButton
                title="About Us"
                routeName="NotFound"
                customBtnStyle={styles.aboutUs}
                customBtnTextStyle={styles.themeButtonFill}
              />
            </View>

            <View style={styles.funFactSec}>
              <View style={[styles.singleFunWrapper, styles.borderRight]}>
                <View style={styles.singleFun}>
                  <Text style={styles.number}>500+</Text>
                  <Text style={[styles.description, styles.spFun]}>
                    Happy Patients
                  </Text>
                </View>
                <View style={styles.singleFun}>
                  <Text style={styles.number}>25+</Text>
                  <Text style={styles.description}>Years Experience</Text>
                </View>
              </View>
              <View style={styles.singleFunWrapper}>
                <View style={styles.singleFun}>
                  <Text style={styles.number}>88+</Text>
                  <Text style={[styles.description, styles.spFun]}>
                    Qualified Doctors
                  </Text>
                </View>
                <View style={styles.singleFun}>
                  <Text style={styles.number}>50+</Text>
                  <Text style={styles.description}>Treatment Awards</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.aboutLeft}>
            <Image source={serviceDetailImg} style={styles.image} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  borderRight: {
    borderRightColor: "#666",
    borderRightWidth: 1,
    marginLeft: -15,
  },
  singleFunWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    paddingLeft: 30,
  },
  aboutWrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  funFactSec: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 20,
    // iOS shadow properties
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android shadow property
    elevation: 5,
  },
  singleFun: {},
  spFun: {
    marginBottom: 20,
  },
  number: {
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 24,
  },
  description: {
    fontSize: 14,
    color: "#666",
    fontWeight: "300",
    marginTop: 8,
  },
  line: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: 1,
    height: "70%",
    backgroundColor: "#dadada",
  },
  themeButtonFill: {
    color: "#fc5185",
    borderRadius: 5,
    paddingHorizontal: 13,
    paddingVertical: 4,
    marginRight: 6,
  },
  aboutUsWrapper: {
    display: "flex",
    alignItems: "flex-start",
    marginTop: 10,
    marginBottom: 35,
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 22,
  },
  column: {
    flex: 1,
  },
  header: {
    textAlign: "center",
    fontSize: 28,
    fontFamily: "JosefinSans_600SemiBold",
    marginBottom: 15,
  },
  paragraph: {
    textAlign: "center",
    fontSize: 18,
    color: "#666",
  },
  aboutUs: {
    textAlign: "left",
    color: "#fc5185",
    borderBottomWidth: 1,
    borderBottomColor: "#fc5185",
  },
  aboutLeft: {
    // Style for the left column
  },
  aboutRight: {
    // Style for the right column
  },
  image: {
    width: "100%",
    height: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  // Add other styles here
});

export default About;
