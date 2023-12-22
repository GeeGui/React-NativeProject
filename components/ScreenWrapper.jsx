import React from "react";
import { ScrollView } from "react-native";

import Header from "../Pages/Home/Header/Header";
import Footer from "../Pages/Home/Footer/Footer";

const ScreenWrapper = ({ children, style }) => {
  return (
    <>
      <ScrollView style={style}>
        <Header />
        {children}
        <Footer />
      </ScrollView>
    </>
  );
};

export default ScreenWrapper;
