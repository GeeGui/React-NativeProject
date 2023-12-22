import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import approved from '../../assets/approved.jpg'

const Approved = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Your Appointment has been</Text>
      </View>
      {/* Image */}
      <View style={styles.imageContainer}>
        <Image source={approved} style={styles.image} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center', // Align items vertically center
    alignItems: 'center', // Align items horizontally center
  },
  titleContainer: {
    marginBottom: 20, // Spacing below the title
    marginTop: 20, // Spacing above the title
  },
  titleText: {
    fontSize: 24, // Adjust to your needs
    textAlign: 'center',
    fontWeight: 'bold', // Adjust this as per your style needs
  },
  imageContainer: {
    // If you need any specific styles for the image container, you can add them here
  },
  image: {
    width: '100%', // You might want to adjust this depending on your layout
    height: 300, // Adjust this value to maintain the aspect ratio or for a fixed height
    resizeMode: 'contain', // or 'cover' depending on the desired effect
  },
});

export default Approved;