module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/signal-cellular-0-bar": require('material-ui/svg-icons/device/signal-cellular-0-bar')
    }
  },
  name: "DeviceSignalCellular0Bar",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSignalCellular0Bar",
        type: "Component"
      }
    }
  }
}