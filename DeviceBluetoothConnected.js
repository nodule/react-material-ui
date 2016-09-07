module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/bluetooth-connected": require('material-ui/svg-icons/device/bluetooth-connected')
    }
  },
  name: "DeviceBluetoothConnected",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBluetoothConnected",
        type: "Component"
      }
    }
  }
}