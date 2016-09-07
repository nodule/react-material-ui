module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/bluetooth-searching": require('material-ui/svg-icons/device/bluetooth-searching')
    }
  },
  name: "DeviceBluetoothSearching",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBluetoothSearching",
        type: "Component"
      }
    }
  }
}