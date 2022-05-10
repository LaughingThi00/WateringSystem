import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Link } from "react-router-native";
import axios from "axios";
import { Button } from "react-native-web";
import { useNavigation } from "@react-navigation/core";
import { AiFillLike } from "react-icons/ai";

const Dashboard = ({ }) => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //  paddingTop: 70,
      backgroundColor: "#ffffff",
      alignItems: "center",
      justifyContent: "flex-start",
      shadowRadius: 20,
    },
    infoContainer: {
      marginTop: 40,
      height: 100,
      width: 300,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      shadowRadius: 20,

    },
    infoItem: {
      width: 147,
      borderRadius: 7,
      borderWidth: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      shadowRadius: 20,

    },
    lightInfo: {
      marginTop: 8,
      borderRadius: 8,
      width: 300,
      height: 150,
      borderWidth: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      shadowRadius: 20,

    },
    addItem: {
      margin: 200,
      fontSize: 20,
      width: 130,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 6,
      height: 40,
      borderWidth: 2,
      shadowRadius: 20,

    },
  });

  const [light, setLight] = useState(0);
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);

  useEffect(
    () => {
      async function fecthData() {
        try {
          const { data } = await axios.get(
            "https://io.adafruit.com/api/v2/protosmouse/feeds/bbc-temperature/data?limit=1"
          );
          setTemp(data[0].value);
        } catch (error) {
          console.log(error);
        }
      }
      async function fecthData2() {
        try {
          const { data } = await axios.get(
            "https://io.adafruit.com/api/v2/protosmouse/feeds/bbc-light/data?limit=1"
          );
          setLight(data[0].value);
        } catch (error) {
          console.log(error);
        }
      }
      async function fecthData3() {
        try {
          const { data } = await axios.get(
            "https://io.adafruit.com/api/v2/protosmouse/feeds/bbc-humi/data?limit=1"
          );
          setHumidity(data[0].value);
        } catch (error) {
          console.log(error);
        }
      }
      fecthData();
      fecthData2();
      fecthData3();
      setInterval(() => {
        fecthData();
        fecthData2();
        fecthData3();
      }, 10000);
    },
    [light],
    [temp],
    [humidity]
  );

  return (

    <View style={styles.container}>
      <ImageBackground source={require('../hom16S.jpeg')} style={{ width: '100%', height: '100%', alignItems: "center" }}>

        <Text style={{ fontSize: 50, paddingTop:70, color: "green", fontWeight: "700", textAlign: "center" , }}>
          Smart Garden
        </Text>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={{ fontSize: 18 }}>Nhiệt độ</Text>
            <Text>{temp} C</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={{ fontSize: 18 }}>Độ ẩm</Text>
            <Text>{humidity} %</Text>
          </View>
        </View>

        <View style={styles.lightInfo}>
          <Text style={{ fontSize: 18 }}>Ánh sáng</Text>
          <Text>{light}</Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 23 }}>Tình trạng bình thường <AiFillLike></AiFillLike> </Text>

        </View>
        <br />
        <View style={{width:"10%"}}>
          <Button
            style={{ fontSize: 30, marginTop: 50,shadowRadius: 20 }}
            title="Danh sách thiết bị"
            onPress={() => navigation.navigate("ViewDevices")}
          />
        </View>
        <br />
        <View style={{width:"10%"}}>
          <Button
            style={{ fontSize: 30, marginTop: 50, }}
            title="Thêm thiết bị"
            onPress={() => navigation.navigate("addnew")}
          />
        </View>
        <StatusBar style="auto" />
      </ImageBackground>

    </View>

  );
};

export default Dashboard;
