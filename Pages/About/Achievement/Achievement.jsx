import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const Achivement = () => {
  return (
    <View style={styles.achievementWrap}>
      <View style={styles.container}>
        <View style={styles.column}>
          <View style={styles.sectionTitle}>
            <Text style={styles.title}>My Goals</Text>
          </View>
          <View style={styles.achievementText}>
            <View style={styles.listContainer}>
              <Text style={styles.listItemDot}>•</Text>
              <Text style={styles.listItem}>
                Become an expert in Programming, and become a web and software
                developer.
              </Text>
            </View>
            <View style={styles.listContainer}>
              <Text style={styles.listItemDot}>•</Text>
              <Text style={styles.listItem}>
                Become an Informative Nurse. Be able to use data analytics and
                information technologies to improve healthcare. Gather data, use
                information, and build knowledge. Evaluate and develop
                informatics programs, coordinate multidisciplinary and
                interdisciplinary projects, optimize workplace communications,
                and maintain accurate patient data.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.achievementFunfact}>
            <ImageBackground
              source={require("../../../Images/single-fun-bg.png")}
              style={styles.singleFunfact}
              imageStyle={styles.backgroundImage}
            >
              <Text style={styles.funfactNumber}>22 +</Text>
              <Text style={styles.funfactText}>Patients</Text>
            </ImageBackground>
            <ImageBackground
              source={require("../../../Images/single-fun-bg.png")}
              style={styles.singleFunfact}
              imageStyle={styles.backgroundImage}
            >
              <Text style={styles.funfactNumber}>75 +</Text>
              <Text style={styles.funfactText}>Doctors</Text>
            </ImageBackground>
            <ImageBackground
              source={require("../../../Images/single-fun-bg.png")}
              style={styles.singleFunfact}
              imageStyle={styles.backgroundImage}
            >
              <Text style={styles.funfactNumber}>25 +</Text>
              <Text style={styles.funfactText}>Awards</Text>
            </ImageBackground>
            <ImageBackground
              source={require("../../../Images/single-fun-bg.png")}
              style={styles.singleFunfact}
              imageStyle={styles.backgroundImage}
            >
              <Text style={styles.funfactNumber}>28 +</Text>
              <Text style={styles.funfactText}>Branch</Text>
            </ImageBackground>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  achievementWrap: {
    backgroundColor: "#004caa",
    padding: 20,
    paddingTop: 100,
  },
  container: {
    flexDirection: "container",
    justifyContent: "space-between",
  },
  column: {
    width: "100%",
  },
  sectionTitle: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  achievementText: {},
  listContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  singleFunfact: {
    paddingTop: 70,
    paddingBottom: 30,
    marginTop: 30,
  },
  listItemDot: {
    paddingRight: 10,
    color: "white",
  },
  listItem: {
    color: "white",
    marginBottom: 10,
  },
  backgroundImage: {
    resizeMode: "contain",
  },
  achievementFunfact: {},
  funfactCard: {
    alignItems: "center",
    marginBottom: 10,
  },
  funfactNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  funfactText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default Achivement;
