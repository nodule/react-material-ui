module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/signal-cellular-3-bar": require('material-ui/svg-icons/device/signal-cellular-3-bar')
    }
  },
  name: "DeviceSignalCellular3Bar",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSignalCellular3Bar",
        type: "Component"
      }
    }
  }
}