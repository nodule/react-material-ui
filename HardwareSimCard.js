module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/sim-card": require('material-ui/svg-icons/hardware/sim-card')
    }
  },
  name: "HardwareSimCard",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareSimCard",
        type: "Component"
      }
    }
  }
}