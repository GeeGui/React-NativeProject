import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
// import { FakeService } from "./FakeService";
import { FakeService } from "../../FakeData/FakeService";
import ServiceItem from "./ServiceItem";

const Service = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>ACTIVITIES AND HONORS</Text>
      </View>
      <View style={styles.listContainer}>
        {FakeService.map((treatment) => (
          <ServiceItem key={treatment.id} treatment={treatment} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004caa",
    paddingHorizontal: 22,
    paddingTop: 40,
  },
  titleContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  listContainer: {
    alignItems: "center",
  },
});

export default Service;
