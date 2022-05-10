import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View, ImageBackground } from "react-native";
import SwitchDevice from "./SwitchDevice";
import { Link } from "react-router-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-web";
import { Button } from "react-native-web";
import axios from "axios";

//1. Hien thi du lieu theo danh sach
//2. Realtime cap nhat moi lan Update va Add

const ViewDevices = () => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // paddingTop: 70,
      backgroundColor: "#ffffff",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    deviceItem: {
      display: "flex",
      padding: 4,
      width: 300,
      marginBottom: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderWidth: 2,
      borderRadius: 6,
    },
  });
  const [data, setData] = useState([
    {
      id: 1,
      name: "tb_1",
      desc:"",
      status: "on",
      timeon:"default",
      status: "off",
      active: false,
    },
    {
      id: 2,
      name: "tb_2",
      desc:"",
      status: "off",
      timeon:"default",
      status: "off",
      active: true,
    },
    {
      id: 3,
      name: "tb_3",
      desc:"",
      status: "on",
      timeon:"default",
      status: "off",
      active: false,
    },
    {
      id: 4,
      name: "tb_4",
      desc:"",
      timeon:"default",
      status: "off",
      active: true,
    },
  ]); 
  
  const removeData = id => {
    const removedArr = [...data].filter(data => data.id !== id);

    setData(removedArr);
  };
  const sendData = async (id) => {
    try {
      const dataSend = data[id - 1].active === false ? 1 : 0;
      console.log(dataSend);
      const res = await axios.post(
        "https://io.adafruit.com/api/v2/protosmouse/feeds/bbc-pump/data",
        {
          value: dataSend,
        },
        {
          headers: {
           // "X-AIO-Key": "aio_cGiP16QjN8IYZSTSs9XF63Mmh2Qo",
           "X-AIO-Key": "aio_gjRs06Zcys1H7rI5elB7uhYtM30f",
          },
        }
      );
      const newData = [...data];
      newData[id - 1].active = !data[id - 1].active;
      setData(newData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../machine.jpeg')} style={{ width: '100%', height: '100%', alignItems: "center" }}>

          <Text style={{ fontSize: 35, marginBottom: 20, fontStyle: "italic", fontWeight: "1000" }}>Danh sách thiết bị</Text>
          <View>
            {data.map((item) => (



              <View style={styles.deviceItem} key={item.id}>
                <Text>Id: {item.id}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
                  <Text>Name: {item.name}</Text>
                </TouchableOpacity>



                <View>
                  <SwitchDevice status={item.active} />
                </View>

                <Button
                  onPress={() => sendData(item.id)}
                  color={
                    item.active === false ? "gray" : "green"
                  }
                  title={item.active === false ? "Tắt" : "Mở"}
                />


                <Button onPress={()=>removeData(item.id)} title="Xóa" color="red" />
              </View>





            ))}
          </View>
          <View>
            <Button
              title="Trở lại"
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default ViewDevices;
