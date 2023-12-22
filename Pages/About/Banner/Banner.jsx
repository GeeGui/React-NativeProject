import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const ProfileImage = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://donto-react.netlify.app/static/media/dentist-profile-img.47081b45.jpg",
      }}
      style={styles.profileImg}
    >
      {/* Content goes here */}
    </ImageBackground>
  );
};

const SocialButton = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={onPress}>
      <FontAwesome5 name={iconName} size={24} color="white" />
    </TouchableOpacity>
  );
};

const handleFacebookPress = () => {
  // Handle Facebook press
};

const handleTwitterPress = () => {
  // Handle Twitter press
};

const handleLinkedinPress = () => {
  // Handle LinkedIn press
};

const Banner = () => {
  return (
    <View style={styles.bannerAll}>
      <View style={styles.container}>
        {/* Left column */}
        <View style={[styles.column, styles.leftColumn]}>
          <View style={styles.singleDentistDetails}>
            <Text style={styles.subTitle}>Who I am</Text>
            <Text style={styles.title}>About Me</Text>
            <Text style={styles.paragraph}>
              Hello! My name is Peace and I enjoy creating things that live on
              the internet. Over 2 years of experience as a Registered Nurse in
              a Long-term care facility and in the home health setting. Also,
              over 3 years in the United States Army with expertise in
              chemical-biological-radiological and nuclear (CBRN) defense.
            </Text>
            <Text style={styles.paragraph}>
              Exceptional skills in assessment, diagnostics, and critical
              thinking in hospital settings. Skills in operations and
              maintenance of CBRN equipment, handling of hazardous materials,
              mass decontamination, administration, and application of CBRN
              measures.
            </Text>
          </View>
          <View>
            <View style={styles.dentistProfile}>
              <ProfileImage />

              <Text style={styles.profileText}>
                Name: <Text style={styles.strong}>Nathan Currie</Text>
              </Text>
              <Text style={styles.profileText}>
                Specialization:{" "}
                <Text style={styles.strong}>Registered Nurse</Text>
              </Text>
              <Text style={styles.profileText}>
                Phone: <Text style={styles.strong}>1-866-764-5387</Text>
              </Text>
              {/* Social media links */}
              <View style={styles.doctorsSocial}>
                <SocialButton
                  iconName="facebook"
                  onPress={handleFacebookPress}
                />
                <SocialButton iconName="twitter" onPress={handleTwitterPress} />
                <SocialButton
                  iconName="linkedin"
                  onPress={handleLinkedinPress}
                />
              </View>
            </View>
          </View>

          <Text style={styles.coreStrengths}>CORE STRENGTHS</Text>
          <View style={styles.dentistAward}>
            <View style={styles.listContainer}>
              <Text style={styles.listItem}>
                <Text style={styles.listItemBefore}>•</Text> Self-discipline
              </Text>
              <Text style={styles.listItem}>
                <Text style={styles.listItemBefore}>•</Text> Flexibility
              </Text>
              <Text style={styles.listItem}>
                <Text style={styles.listItemBefore}>•</Text> Adaptability
              </Text>
            </View>
            <View style={styles.listContainer}>
              <Text style={styles.listItem}>
                <Text style={styles.listItemBefore}>•</Text> Teamwork
              </Text>
              <Text style={styles.listItem}>
                <Text style={styles.listItemBefore}>•</Text> Attention
              </Text>
              <Text style={styles.listItem}>
                <Text style={styles.listItemBefore}>•</Text> Critical thinking
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subTitle: {
    color: "white",
    fontSize: 20,
  },
  coreStrengths: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginTop: 40,
  },
  paragraph: {
    color: "white",
    fontSize: 16,
  },
  singleDentistDetails: {
    display: "flex",
    flexDirection: "column",
  },
  dentistProfile: {
    marginTop: 30,
  },
  bannerAll: {
    backgroundColor: "#004caa",
    padding: 22,
    marginBottom: 20,
    paddingBottom: 40,
  },
  profileText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  strong: {
    fontWeight: "bold",
    fontSize: 18,
  },
  doctorsSocial: {
    marginTop: 20,
    borderTopColor: "#aaa",
    borderTopWidth: 1,
    flexDirection: "row", // Add this to align the buttons horizontally
    justifyContent: "center", // Add this to space out the buttons evenly
    paddingVertical: 10, // Add some padding to the top and bottom
  },
  container: {
    flexDirection: "column",
  },
  column: {
    flex: 1,
  },
  leftColumn: {
    paddingRight: 10,
  },
  rightColumn: {
    paddingLeft: 10,
  },
  profileImg: {
    height: 350,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    // React Native uses elevation for shadow on Android and shadow* properties for iOS
    // The following shadow properties are for iOS
    shadowColor: "#000",
    shadowOffset: { width: 8.135, height: 18.271 },
    shadowOpacity: 0.08,
    shadowRadius: 40,
    // Elevation for Android
    elevation: 10,
    overflow: "hidden",
  },
  dentistAward: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
  listItem: {
    position: "relative",
    paddingLeft: 16,
    marginRight: 25,
    marginTop: 14,
    color: "white",
    fontSize: 16,
  },
  listItemBefore: {
    color: "#fc5185",
    fontSize: 16,
  },
});

export default Banner;
