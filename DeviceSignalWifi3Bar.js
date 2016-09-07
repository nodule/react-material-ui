module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/signal-wifi-3-bar": require('material-ui/svg-icons/device/signal-wifi-3-bar')
    }
  },
  name: "DeviceSignalWifi3Bar",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSignalWifi3Bar",
        type: "Component"
      }
    }
  }
}