import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AboutFocus } from "../../FakeData/AboutFocus";
import Services from "../../Pages/About/Services/Services";

const Service = () => {
  return (
    <View style={styles.serviceWrapper}>
      <View style={styles.container}>
        <View style={styles.sectionTitle}>
          <Text style={styles.subtitle}>What I work with</Text>
          <Text style={styles.title}>My Skills</Text>
        </View>
        <View style={styles.servicesContainer}>
          {AboutFocus.map((treatment) => (
            <Services key={treatment.id} treatment={treatment} />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  serviceWrapper: {
    flex: 1,
    backgroundColor: "#004caa",
  },
  container: {
    padding: 10,
  },
  sectionTitle: {
    alignItems: "center",
    marginVertical: 30,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  servicesContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Service;
