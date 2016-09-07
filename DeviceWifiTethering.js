module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/wifi-tethering": require('material-ui/svg-icons/device/wifi-tethering')
    }
  },
  name: "DeviceWifiTethering",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceWifiTethering",
        type: "Component"
      }
    }
  }
}