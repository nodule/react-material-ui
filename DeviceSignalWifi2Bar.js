module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/signal-wifi-2-bar": require('material-ui/svg-icons/device/signal-wifi-2-bar')
    }
  },
  name: "DeviceSignalWifi2Bar",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSignalWifi2Bar",
        type: "Component"
      }
    }
  }
}