import React from "react";

export const DeviceContext = React.createContext();

const DeviceProvide = ({ children }) => {
  const [data, setData] = React.useState([
    {
      id: 1,
      name: "tb_1",
      desc: "",
      status: "on",
      timeon: "default",
      status: "off",
      active: false,
    },
    {
      id: 2,
      name: "tb_2",
      desc: "",
      status: "off",
      timeon: "default",
      status: "off",
      active: true,
    },
    {
      id: 3,
      name: "tb_3",
      desc: "",
      status: "on",
      timeon: "default",
      status: "off",
      active: false,
    },
    {
      id: 4,
      name: "tb_4",
      desc: "",
      timeon: "default",
      status: "off",
      active: true,
    },
  ]);

  const removeData = (id) => {
    const removedArr = [...data].filter((data) => data.id !== id);
    setData(removedArr);
  };

  const addNewDevice = (newDevice) => {
    const newArray = [...data, newDevice];
    setData(newArray);
  };

  const updateStatus = (id) => {
    const newArray = [...data].map((item) => {
      if (item.id === id) {
        item.active = !item.active;
      }
      return item;
    });
    setData(newArray);
  };

  const updateDevice = (dataDevice) => {
    const newArray = [...data].map((item) => {
      if (item.id === dataDevice.id) {
        item = dataDevice;
      }
      return item;
    });
    setData(newArray);
  };

  const DeviceData = {
    data,
    removeData,
    addNewDevice,
    updateStatus,
    updateDevice,
  };

  return (
    <DeviceContext.Provider value={DeviceData}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceProvide;
