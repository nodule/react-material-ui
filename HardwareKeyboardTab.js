module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/keyboard-tab": require('material-ui/svg-icons/hardware/keyboard-tab')
    }
  },
  name: "HardwareKeyboardTab",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareKeyboardTab",
        type: "Component"
      }
    }
  }
}