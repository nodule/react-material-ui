module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/signal-cellular-null": require('material-ui/svg-icons/device/signal-cellular-null')
    }
  },
  name: "DeviceSignalCellularNull",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSignalCellularNull",
        type: "Component"
      }
    }
  }
}