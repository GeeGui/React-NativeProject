import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_600SemiBold,
} from "@expo-google-fonts/josefin-sans";

import CustomButton from "../../../components/CustomButton";

const Banner = () => {
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
    <View style={styles.singleHeroSlide}>
      <View style={styles.container}>
        <View style={[styles.column, styles.leftColumn]}>
          <View style={styles.heroSlideLeft}>
            <Text style={styles.heading}>Better Life Through</Text>
            <Text style={styles.mainHeading}>Better Treatments</Text>
            <Text style={styles.description}>
              Join us to a fun and friendly treatment environment. Our
              professionals are working so hard to see a smile on your face that
              you deserve! We are dedicated to our duties.
            </Text>
            <View style={styles.bannerBtns}>
              <CustomButton
                title="Appointment"
                routeName="NotFound"
                customBtnStyle={styles.themeButtonFill}
                customBtnTextStyle={styles.textWhite}
              />
              <CustomButton
                title="Learn More"
                routeName="NotFound"
                customBtnStyle={styles.themeButtonBlank}
                customBtnTextStyle={styles.textWhite}
              />
            </View>
          </View>
        </View>
        <View style={[styles.column, styles.rightColumn]}>
          <View style={styles.heroSlideRight}>
            <Image
              source={require("../../../Images/doctor.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  singleHeroSlide: {
    flex: 1,
    backgroundColor: "#004caa",
    paddingHorizontal: 22,
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  column: {
    flex: 1,
  },
  leftColumn: {},
  heroSlideLeft: {},
  textWhite: {
    color: "white",
  },
  heading: {
    color: "white",
    fontSize: 28,
    fontFamily: "JosefinSans_400Regular",
    textAlign: "center",
  },
  mainHeading: {
    color: "white",
    fontSize: 36,
    fontFamily: "JosefinSans_600SemiBold",
    textAlign: "center",
    marginBottom: 15,
  },
  description: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    marginBottom: 20,
  },
  bannerBtns: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  themeButtonFill: {
    backgroundColor: "#fc5185",
    borderRadius: 5,
    paddingHorizontal: 13,
    paddingVertical: 4,
    marginRight: 6,
  },
  themeButtonBlank: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "white",
  },
  bannerBtn: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  activeBannerBtn: {
    color: "black",
  },
  rightColumn: {
    marginLeft: 10,
  },
  heroSlideRight: {
    marginVertical: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
});

export default Banner;
