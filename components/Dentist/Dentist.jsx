import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FakeDoctors } from "../../FakeData/Dentist";
import Doctors from "../../Pages/Home/Doctors/Doctors";

const Dentist = () => {
  return (
    <View style={styles.doctorWrapper}>
      <View style={styles.sectionTitle}>
        <Text style={styles.titleText}>Our doctors</Text>
      </View>
      <View style={styles.doctorsList}>
        {FakeDoctors.map((dentist) => (
          <Doctors key={dentist.id} dentist={dentist} />
        ))}
      </View>
    </View>
  );
};

export default Dentist;

const styles = StyleSheet.create({
  doctorWrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  sectionTitle: {
    alignItems: "center",
    marginVertical: 20,
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  doctorsList: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
