module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/wifi-lock": require('material-ui/svg-icons/device/wifi-lock')
    }
  },
  name: "DeviceWifiLock",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceWifiLock",
        type: "Component"
      }
    }
  }
}