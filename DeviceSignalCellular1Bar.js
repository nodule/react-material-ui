module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/signal-cellular-1-bar": require('material-ui/svg-icons/device/signal-cellular-1-bar')
    }
  },
  name: "DeviceSignalCellular1Bar",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSignalCellular1Bar",
        type: "Component"
      }
    }
  }
}