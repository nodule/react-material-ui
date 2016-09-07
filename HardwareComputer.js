module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/computer": require('material-ui/svg-icons/hardware/computer')
    }
  },
  name: "HardwareComputer",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareComputer",
        type: "Component"
      }
    }
  }
}