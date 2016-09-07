module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/keyboard-arrow-down": require('material-ui/svg-icons/hardware/keyboard-arrow-down')
    }
  },
  name: "HardwareKeyboardArrowDown",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareKeyboardArrowDown",
        type: "Component"
      }
    }
  }
}