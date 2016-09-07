module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/keyboard-voice": require('material-ui/svg-icons/hardware/keyboard-voice')
    }
  },
  name: "HardwareKeyboardVoice",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareKeyboardVoice",
        type: "Component"
      }
    }
  }
}