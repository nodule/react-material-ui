module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/signal-wifi-4-bar-lock": require('material-ui/svg-icons/device/signal-wifi-4-bar-lock')
    }
  },
  name: "DeviceSignalWifi4BarLock",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSignalWifi4BarLock",
        type: "Component"
      }
    }
  }
}