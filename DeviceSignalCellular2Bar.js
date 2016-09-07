module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/signal-cellular-2-bar": require('material-ui/svg-icons/device/signal-cellular-2-bar')
    }
  },
  name: "DeviceSignalCellular2Bar",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSignalCellular2Bar",
        type: "Component"
      }
    }
  }
}