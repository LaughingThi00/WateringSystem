import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  Picker,
  ImageBackground,
} from "react-native";
import SwitchDevice from "./SwitchDevice";
import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import { DeviceContext } from "../context/DeviceContext";

const Detail = ({ route }) => {
  const navigation = useNavigation();
  console.log(route.params.deviceId);
  const { data, updateDevice } = React.useContext(DeviceContext);
  const deviceData = data.filter(
    (item) => item.id === route.params.deviceId
  )[0];
  const [text, onChangeText] = React.useState(deviceData.name);
  const [desc, onChangeDesc] = React.useState(deviceData.desc);
  const [selectedValue, setSelectedValue] = React.useState("default");
  const handleSubmit = () => {
    const newData = {
      id: deviceData.id,
      name: text,
      desc: desc,
      timeon: selectedValue,
      active: false,
      status: "off",
    };
    updateDevice(newData);
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../device.jpeg")}
        style={{ width: "100%", height: "100%", alignItems: "center" }}
      >
        <Text style={{ fontSize: 35, marginBottom: 20, paddingTop: 70, fontStyle: "italic", fontWeight: "1000" }}>Chi tiết thiết bị</Text>

        <Text style={{ marginRight: 280, alignSelf: "center" }}>Tên</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text style={{ marginRight: 280, alignSelf: "center" }}>Mô tả</Text>
        <TextInput
          style={styles.input}
          numberOfLines={4}
          onChangeText={onChangeDesc}
          placeholder="useless placeholder"
          multiline={true}
          value={desc}
        />
        <Text>Thời gian bật</Text>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 70, width: 150, borderWidth: 1 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="1:00" value="1" />
          <Picker.Item label="2:00" value="2" />
          <Picker.Item label="3:00" value="3" />
          <Picker.Item label="4:00" value="4" />
          <Picker.Item label="5:00" value="5" />
          <Picker.Item label="6:00" value="6" />
          <Picker.Item label="7:00" value="7" />
          <Picker.Item label="8:00" value="8" />
          <Picker.Item label="9:00" value="9" />
          <Picker.Item label="10:00" value="10" />
          <Picker.Item label="11:00" value="11" />
          <Picker.Item label="12:00" value="12" />
          <Picker.Item label="13:00" value="13" />
          <Picker.Item label="14:00" value="14" />
          <Picker.Item label="15:00" value="15" />
          <Picker.Item label="16:00" value="16" />
          <Picker.Item label="17:00" value="17" />
          <Picker.Item label="18:00" value="18" />
          <Picker.Item label="19:00" value="19" />
          <Picker.Item label="20:00" value="20" />
          <Picker.Item label="21:00" value="21" />
          <Picker.Item label="22:00" value="22" />
          <Picker.Item label="23:00" value="23" />
          <Picker.Item label="24:00" value="24" />
          <Picker.Item label="Default" value="default" />
        </Picker>

        <br />
        <View style={{ width: "10%" }}>
          <Button
            onPress={() => {
              handleSubmit();
            }}
            title="Cập nhật"
          />
        </View>
        <br />
        <View style={{ width: "10%" }}>
          <Button
            title="Trở lại"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  paddingTop: 70,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  containerPicker: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
});

export default Detail;
