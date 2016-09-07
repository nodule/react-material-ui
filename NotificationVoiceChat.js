module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/voice-chat": require('material-ui/svg-icons/notification/voice-chat')
    }
  },
  name: "NotificationVoiceChat",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationVoiceChat",
        type: "Component"
      }
    }
  }
}