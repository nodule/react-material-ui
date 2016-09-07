module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/settings-voice": require('material-ui/svg-icons/action/settings-voice')
    }
  },
  name: "ActionSettingsVoice",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSettingsVoice",
        type: "Component"
      }
    }
  }
}