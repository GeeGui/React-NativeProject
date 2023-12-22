import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";

const Services = (props) => {
  const { title, description, link, img } = props.treatment;
  const flipAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(flipAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [flipAnim]);

  const flipInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animatedStyle = {
    transform: [
      {
        rotateY: flipInterpolate,
      },
    ],
  };

  return (
    <View style={styles.col}>
      <Animated.View style={[styles.singleServiceBox, animatedStyle]}>
        <View style={styles.serviceIcon}>
          <Image source={{ uri: img }} style={styles.image} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.link}>{link}</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  col: {
    width: "100%",
    padding: 8,
    borderColor: "#fff",
    borderWidth: 1,
    marginBottom: 20,
  },
  singleServiceBox: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  serviceIcon: {
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
    color: "#fff",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
  },
  link: {
    fontSize: 14,
    color: "blue", // Use your theme color for links
    marginTop: 8,
  },
});

export default Services;
