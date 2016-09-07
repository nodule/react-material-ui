module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/voicemail": require('material-ui/svg-icons/communication/voicemail')
    }
  },
  name: "CommunicationVoicemail",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationVoicemail",
        type: "Component"
      }
    }
  }
}