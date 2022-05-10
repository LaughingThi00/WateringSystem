import React, { useState } from "react";
import { Switch, View, Text, SafeAreaView, StyleSheet } from "react-native";
import axios from "axios";

const SwitchDevice = ({ status }) => {
  // const dataStatus = status;
  const [switchValue, setSwitchValue] = useState(status);

  const toggleSwitch = (value) => {
    //onValueChange of the switch this function will be called
    setSwitchValue(value);
    //state changes according to switch
    //which will result in re-render the text
  };

  return (
    <SafeAreaView
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Switch onValueChange={toggleSwitch} value={status} />
      </View>
    </SafeAreaView>
  );
};

export default SwitchDevice;
