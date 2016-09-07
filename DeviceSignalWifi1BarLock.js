module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/signal-wifi-1-bar-lock": require('material-ui/svg-icons/device/signal-wifi-1-bar-lock')
    }
  },
  name: "DeviceSignalWifi1BarLock",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSignalWifi1BarLock",
        type: "Component"
      }
    }
  }
}