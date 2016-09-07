module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/record-voice-over": require('material-ui/svg-icons/action/record-voice-over')
    }
  },
  name: "ActionRecordVoiceOver",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionRecordVoiceOver",
        type: "Component"
      }
    }
  }
}