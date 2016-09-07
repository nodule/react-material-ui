module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/keyboard-hide": require('material-ui/svg-icons/hardware/keyboard-hide')
    }
  },
  name: "HardwareKeyboardHide",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareKeyboardHide",
        type: "Component"
      }
    }
  }
}