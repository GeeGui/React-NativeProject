import React from "react";
import { StyleSheet } from "react-native";
import Dentist from "../../../components/Dentist/Dentist";
import About from "../About/About";
import Promo from "../Appointment-promo/Promo";
import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";

import ScreenWrapper from "../../../components/ScreenWrapper";

const Home = () => {
  return (
    <ScreenWrapper style={styles.home}>
      <Banner />
      <About />
      <Dentist />
      <ContactUs />
      <Appointment />
      <Promo />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
});

export default Home;
