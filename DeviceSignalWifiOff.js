module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/signal-wifi-off": require('material-ui/svg-icons/device/signal-wifi-off')
    }
  },
  name: "DeviceSignalWifiOff",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSignalWifiOff",
        type: "Component"
      }
    }
  }
}