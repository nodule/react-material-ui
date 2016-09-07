module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/bluetooth-disabled": require('material-ui/svg-icons/device/bluetooth-disabled')
    }
  },
  name: "DeviceBluetoothDisabled",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBluetoothDisabled",
        type: "Component"
      }
    }
  }
}