module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/signal-wifi-4-bar": require('material-ui/svg-icons/device/signal-wifi-4-bar')
    }
  },
  name: "DeviceSignalWifi4Bar",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSignalWifi4Bar",
        type: "Component"
      }
    }
  }
}