module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/keyboard-arrow-left": require('material-ui/svg-icons/hardware/keyboard-arrow-left')
    }
  },
  name: "HardwareKeyboardArrowLeft",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareKeyboardArrowLeft",
        type: "Component"
      }
    }
  }
}