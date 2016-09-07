module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/keyboard-backspace": require('material-ui/svg-icons/hardware/keyboard-backspace')
    }
  },
  name: "HardwareKeyboardBackspace",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareKeyboardBackspace",
        type: "Component"
      }
    }
  }
}