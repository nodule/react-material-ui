module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/keyboard-arrow-right": require('material-ui/svg-icons/hardware/keyboard-arrow-right')
    }
  },
  name: "HardwareKeyboardArrowRight",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareKeyboardArrowRight",
        type: "Component"
      }
    }
  }
}