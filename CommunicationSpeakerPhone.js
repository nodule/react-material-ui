module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/speaker-phone": require('material-ui/svg-icons/communication/speaker-phone')
    }
  },
  name: "CommunicationSpeakerPhone",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationSpeakerPhone",
        type: "Component"
      }
    }
  }
}