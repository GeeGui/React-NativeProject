import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Doctors = (props) => {
  const { name, status, img } = props.dentist;

  return (
    <View style={styles.col}>
      <View style={styles.singleFeatureBox}>
        <View style={styles.doctorsProfile}>
          <Image source={{ uri: img }} style={styles.profileImage} />
        </View>
        <View style={styles.doctorsInfo}>
          <Text style={styles.doctorName}>{name}</Text>
          <Text style={styles.doctorStatus}>{status}</Text>
        </View>
        <View style={styles.doctorsSocial}>
          <TouchableOpacity>
            <FontAwesome5 name="facebook-f" size={24} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="twitter" size={24} color="#00acee" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="whatsapp" size={24} color="#25D366" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="linkedin-in" size={24} color="#0e76a8" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  col: {
    padding: 8,
    marginBottom: 10,
    borderColor: "#888",
    // iOS shadow properties
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android shadow property
    elevation: 3,
  },
  singleFeatureBox: {
    margin: 16,
  },
  doctorsProfile: {
    backgroundColor: "#fc5185",
    borderRadius: 150,
    width: 250,
    height: 250,
    display: "flex",
    flexDirection: "column-reverse",
    overflow: "hidden",
  },
  profileImage: {
    height: 200,
    objectFit: "contain",
    resizeMode: "contain",
  },
  doctorsInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "#666",
    borderBottomWidth: 1,
  },
  doctorName: {
    fontWeight: "bold",
    fontSize: 20,
  },
  doctorStatus: {
    fontSize: 16,
  },
  doctorsSocial: {
    // Add your styles for the social media icons
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  // ... add any additional styles you need
});

export default Doctors;
