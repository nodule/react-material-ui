module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/chat-bubble": require('material-ui/svg-icons/communication/chat-bubble')
    }
  },
  name: "CommunicationChatBubble",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationChatBubble",
        type: "Component"
      }
    }
  }
}