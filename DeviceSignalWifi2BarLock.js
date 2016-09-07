module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/signal-wifi-2-bar-lock": require('material-ui/svg-icons/device/signal-wifi-2-bar-lock')
    }
  },
  name: "DeviceSignalWifi2BarLock",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSignalWifi2BarLock",
        type: "Component"
      }
    }
  }
}