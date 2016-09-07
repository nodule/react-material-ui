module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/keyboard-arrow-up": require('material-ui/svg-icons/hardware/keyboard-arrow-up')
    }
  },
  name: "HardwareKeyboardArrowUp",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareKeyboardArrowUp",
        type: "Component"
      }
    }
  }
}