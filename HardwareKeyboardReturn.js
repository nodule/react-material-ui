module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/keyboard-return": require('material-ui/svg-icons/hardware/keyboard-return')
    }
  },
  name: "HardwareKeyboardReturn",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareKeyboardReturn",
        type: "Component"
      }
    }
  }
}