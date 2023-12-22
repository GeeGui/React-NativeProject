import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

// Icons for different experiences
const workIcon = <FontAwesome5 name="briefcase" size={24} color="#fff" />;
const schoolIcon = <FontAwesome5 name="school" size={24} color="#fff" />;
const starIcon = <FontAwesome5 name="star" size={24} color="#fff" />;

// Timeline element component
function TimelineElement({ date, title, subtitle, desc, icon, iconStyle }) {
  return (
    <View style={styles.timelineElement}>
      <View style={styles.iconContainer}>
        <View style={[styles.iconBackground, iconStyle]}>{icon}</View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        {desc && <Text style={styles.desc}>{desc}</Text>}
      </View>
      <View style={styles.line} />
    </View>
  );
}

// Main timeline component
function Timeline() {
  const timeline = [
    {
      icon: schoolIcon,
      iconStyle: { backgroundColor: "rgb(233, 30, 99)" },
      date: "November 2020 - Present",
      title: "Registered Nurse",
      subtitle: "Best Home Health Providers",
      desc: "Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
    },
    {
      icon: schoolIcon,
      iconStyle: { backgroundColor: "rgb(233, 30, 99)" },
      date: "November 2020 - July 2022",
      title: "Registered Nurse",
      subtitle: "Miami, FL",
      desc: "Palo Alto Veteran Affairs Hospital",
    },
    {
      icon: workIcon,
      iconStyle: { backgroundColor: "rgb(33, 150, 243)" },
      date: "November 2019 – December 2020",
      title: "Registered Nurse",
      subtitle: "Empress Care Center, San Jose, California",
      desc: "Teach patients, family members, and auxiliary nursing personnel proper health maintenance care.",
    },
    {
      icon: starIcon,
      iconStyle: { backgroundColor: "rgb(16, 204, 82)" },
      date: "October 2019",
      title: "Achievement Unlocked",
      subtitle: "Recognition of Excellence",
      desc: "Awarded for outstanding performance and dedication.",
    },
    // ... other timeline elements
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>WORK EXPERIENCE</Text>
      <View style={styles.timeline}>
        {timeline.map((t, i) => (
          <TimelineElement
            key={i}
            date={t.date}
            title={t.title}
            subtitle={t.subtitle}
            desc={t.desc}
            icon={t.icon}
            iconStyle={t.iconStyle}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    paddingRight: 22,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  timeline: {
    paddingLeft: 20,
  },
  timelineElement: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  iconContainer: {
    width: 50,
    alignItems: "center",
  },
  iconBackground: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
  },
  desc: {
    fontSize: 14,
  },
  line: {
    position: "absolute",
    top: 25,
    left: 25,
    width: 2,
    height: "100%",
    backgroundColor: "white",
    zIndex: -1,
  },
});

export default Timeline;
