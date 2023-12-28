import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { useEffect, useState } from 'react';

import background from "../assets/aquascape11.png"

import { db, ref, onValue } from "../firebase";

const AquaData = () => {

  const [temp, setTemp] = useState(22);
  const [pH, setpH] = useState(22);
  const [co2, setco2] = useState(22);

  useEffect(() => {
    const data = ref(db);

    onValue(data, (snapshot) => {
      setTemp(snapshot.val().temp);
      setpH(snapshot.val().pH);
      setco2(snapshot.val().co2);
    });
  }, [db]);
  return (
    <ImageBackground  
      source={background}
      style={styles.container}
    >
      <View style={styles.tempWrapper}>
        <Text style={styles.text}>{temp}°</Text>
      </View>
      <View style = {styles.data}>
        <View style = {styles.spacer}></View>
        <View style = {styles.dataWrapper}>
          <View style = {styles.pH}>
            <Text style = {styles.dataText}>{pH}</Text>
            <Text style = {styles.title}>pH</Text>
          </View>
          <View style = {styles.co2}>
            <Text style = {styles.dataText}>{co2}%</Text>
            <Text style = {styles.title}>CO2</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AquaData;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      paddingRight: 20,
    },
    tempWrapper: {
      flex: 1,
      justifyContent: "center",
    },
    text: {
      fontSize: 150,
      fontWeight: "100",
      textAlign: "right",
      color: "white",
    },
    data: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    spacer: {
      height: "30%",
    },
    dataWrapper: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      flexDirection: "row",
      height: "20%",
      justifyContent: "space-around",
      alignItems: "center",
      width: "80%",
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "white",
    },
    pH: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    co2: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    dataText: {
      fontSize: 20,
      fontWeight: "300",
      color: "white",
      textAlign: "center",
    },
    title: {
      fontSize: 15,
      fontWeigth: "bold",
      color: "white",
      textAlign: "center",
    },
});