module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/signal-wifi-1-bar": require('material-ui/svg-icons/device/signal-wifi-1-bar')
    }
  },
  name: "DeviceSignalWifi1Bar",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSignalWifi1Bar",
        type: "Component"
      }
    }
  }
}