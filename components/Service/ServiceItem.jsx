// ServiceItem.js
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SvgUri } from "react-native-svg";

const ServiceItem = ({ treatment }) => {
  return (
    <View style={styles.card}>
      <SvgUri
        width="100"
        height="100"
        uri={treatment.img}
        style={styles.svgImage}
      />
      <Text style={styles.title}>{treatment.title}</Text>
      <Text style={styles.description}>{treatment.description}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.readMore}>Read More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#004caa",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    margin: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "white",
  },
  description: {
    fontSize: 14,
    color: "#aaa",
    textAlign: "center",
  },
  readMore: {
    color: "white",
    marginTop: 8,
    fontWeight: "bold",
    borderBottomColor: "#fc5185",
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default ServiceItem;
