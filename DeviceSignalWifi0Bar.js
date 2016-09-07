module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/signal-wifi-0-bar": require('material-ui/svg-icons/device/signal-wifi-0-bar')
    }
  },
  name: "DeviceSignalWifi0Bar",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSignalWifi0Bar",
        type: "Component"
      }
    }
  }
}