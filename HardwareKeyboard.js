module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/keyboard": require('material-ui/svg-icons/hardware/keyboard')
    }
  },
  name: "HardwareKeyboard",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareKeyboard",
        type: "Component"
      }
    }
  }
}