module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/signal-cellular-no-sim": require('material-ui/svg-icons/device/signal-cellular-no-sim')
    }
  },
  name: "DeviceSignalCellularNoSim",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSignalCellularNoSim",
        type: "Component"
      }
    }
  }
}