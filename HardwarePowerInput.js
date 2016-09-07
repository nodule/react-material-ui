module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/power-input": require('material-ui/svg-icons/hardware/power-input')
    }
  },
  name: "HardwarePowerInput",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwarePowerInput",
        type: "Component"
      }
    }
  }
}