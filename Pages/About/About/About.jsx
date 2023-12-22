import React from "react";
import { View, StyleSheet } from "react-native";
import AboutService from "../../../components/AboutService/AboutService"; // Convert to React Native component if necessary
import Appointment from "../../Home/Appointment/Appointment"; // Convert to React Native component if necessary
import Achievement from "../Achievement/Achievement"; // Convert to React Native component if necessary
import Banner from "../Banner/Banner"; // Convert to React Native component if necessary
import Feature from "../../../components/Feature/Feature"; // Convert to React Native component if necessary
import Service from "../../../components/Service/Service"; // Convert to React Native component if necessary
import Timeline from "../Timeline/Timeline"; // Convert to React Native component if necessary

import ScreenWrapper from "../../../components/ScreenWrapper";

const About = () => {
  return (
    <ScreenWrapper style={styles.aboutContainer}>
      <Banner />
      <Feature />
      <AboutService />
      <Timeline />
      <Service />
      <Achievement />
      <Appointment />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
  },
});

export default About;
