import React from "react";
import { View, StyleSheet } from "react-native";
import { FakeFeatures } from "../../FakeData/Features";
import Features from "../../Pages/About/Features/Features";

const Feature = () => {
  return (
    <View style={styles.featureWrapper}>
      <View
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {FakeFeatures.map((feature) => (
          <Features key={feature.id} feature={feature} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  featureWrapper: {
    flex: 1,
  },
  container: {
    padding: 22,
  },
  contentContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default Feature;
