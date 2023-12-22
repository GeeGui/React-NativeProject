import React, { useRef, useEffect } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { SvgUri } from "react-native-svg";

const Features = (props) => {
  const { title, description, img } = props.feature;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.col}>
      <Animated.View style={[styles.singleFeatureBox, { opacity: fadeAnim }]}>
        <View style={styles.iconBox}>
          {/* <Image source={{ uri: img }} style={styles.image} /> */}
          <SvgUri width="100" height="100" uri={img} style={styles.image} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  col: {},
  singleFeatureBox: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  iconBox: {
    marginBottom: 8,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default Features;
