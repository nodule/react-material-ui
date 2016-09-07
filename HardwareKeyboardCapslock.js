module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/keyboard-capslock": require('material-ui/svg-icons/hardware/keyboard-capslock')
    }
  },
  name: "HardwareKeyboardCapslock",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareKeyboardCapslock",
        type: "Component"
      }
    }
  }
}