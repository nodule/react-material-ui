module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/bluetooth": require('material-ui/svg-icons/device/bluetooth')
    }
  },
  name: "DeviceBluetooth",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBluetooth",
        type: "Component"
      }
    }
  }
}