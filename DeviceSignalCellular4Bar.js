module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/signal-cellular-4-bar": require('material-ui/svg-icons/device/signal-cellular-4-bar')
    }
  },
  name: "DeviceSignalCellular4Bar",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSignalCellular4Bar",
        type: "Component"
      }
    }
  }
}