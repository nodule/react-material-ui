module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/gamepad": require('material-ui/svg-icons/hardware/gamepad')
    }
  },
  name: "HardwareGamepad",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareGamepad",
        type: "Component"
      }
    }
  }
}