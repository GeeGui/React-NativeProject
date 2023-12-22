import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import logo from "../../../Images/logo.png";
import logo from "../../../Images/logo.png";

const Header = () => {
  const navigation = useNavigation();

  const ListItem = ({ navigation, title, routeName }) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
      <TouchableHighlight
        underlayColor="#00000000" // Transparent underlay color
        onPress={() => navigation.navigate(routeName)}
        onShowUnderlay={() => setIsPressed(true)}
        onHideUnderlay={() => setIsPressed(false)}
      >
        <Text style={[styles.listItem, isPressed && styles.activeListItem]}>
          {title}
        </Text>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.headBg}>
      <StatusBar
        translucent={true}
        backgroundColor={"transparent"}
        hidden={true}
      />
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={logo} style={styles.logo} />
        </TouchableOpacity>
        <View style={styles.navItems}>
          <ListItem navigation={navigation} title="Home" routeName="Home" />
          <ListItem navigation={navigation} title="About" routeName="About" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headBg: {
    backgroundColor: "#004caa",
    padding: 20,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  containerHead: {},
  logo: {
    width: 120,
    height: 35,
  },
  navItems: {
    flexDirection: "row",
    alignItems: "center",
  },
  listItem: {
    fontSize: 18,
    marginHorizontal: 10,
    color: "#006",
  },
  activeListItem: {
    color: "red",
  },
});

export default Header;
