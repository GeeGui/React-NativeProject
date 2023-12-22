import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormInput from "../../../components/FormInput";

const Appointment = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("NotFound"); // Make sure 'Login' is the correct route name
  };

  return (
    <View style={styles.appointmentWrapper}>
      <View style={styles.container}>
        <View style={styles.fullWidth}>
          <View style={styles.sectionTitle}>
            <Text style={styles.title}>Request Appointment</Text>
          </View>
          <View style={styles.appointmentForm}>
            <FormInput style={styles.formInput} placeholder="Name" />
            <FormInput
              style={styles.formInput}
              placeholder="Email"
              keyboardType="email-address"
            />
            <FormInput
              style={styles.formInput}
              placeholder="Phone"
              keyboardType="phone-pad"
            />
            <FormInput style={styles.formInput} placeholder="Subject" />
            <FormInput
              placeholder="Message"
              multiline
              numberOfLines={4}
              style={styles.textArea}
            />
            <Button title="Submit" onPress={handleSubmit} color="#fc5185" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textArea: {
    textAlignVertical: "top",
  },
  appointmentWrapper: {
    padding: 20,
    backgroundColor: "#ddd",
  },
  container: {},
  fullWidth: {
    width: "100%",
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  appointmentForm: {},
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#CCCCCC",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  formInput: {
    backgroundColor: "white",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
});

export default Appointment;
