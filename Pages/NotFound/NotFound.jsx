import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import notFoundImage from "../../Images/404.png";
import notFoundImage from "../../Images/404.png";
import ScreenWrapper from "../../components/ScreenWrapper";

const NotFound = () => {
  const navigation = useNavigation();

  return (
    <ScreenWrapper style={styles.screenWrapper}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={notFoundImage}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  buttonContainer: {
    marginBottom: 40,
  },
  button: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default NotFound;
