module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/signal-cellular-off": require('material-ui/svg-icons/device/signal-cellular-off')
    }
  },
  name: "DeviceSignalCellularOff",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSignalCellularOff",
        type: "Component"
      }
    }
  }
}