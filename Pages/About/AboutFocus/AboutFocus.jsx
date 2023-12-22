import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Services = (props) => {
  const { title, description, img } = props.treatment;

  return (
    <View style={styles.col}>
      <View style={styles.singleServiceBox}>
        {/* Icon or image representing the service */}
        <View style={styles.serviceIcon}>
          <Image source={{ uri: img }} style={styles.image} />
        </View>
        {/* Title of the service */}
        <Text style={styles.title}>{title}</Text>
        {/* Description of the service */}
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  col: {
    width: '50%', // Equivalent to 6 columns out of 12 in Bootstrap for medium devices
    paddingHorizontal: 8, // Adjust as needed for spacing
  },
  singleServiceBox: {
    // Add styles for your service box here
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center', // Center children horizontally
  },
  serviceIcon: {
    // Add styles for your service icon container here
    marginBottom: 8,
  },
  image: {
    width: 50, // Set your desired image width
    height: 50, // Set your desired image height
    resizeMode: 'contain', // To fit the image within the dimensions
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Services;