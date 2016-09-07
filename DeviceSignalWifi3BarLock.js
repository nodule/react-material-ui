module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/signal-wifi-3-bar-lock": require('material-ui/svg-icons/device/signal-wifi-3-bar-lock')
    }
  },
  name: "DeviceSignalWifi3BarLock",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSignalWifi3BarLock",
        type: "Component"
      }
    }
  }
}