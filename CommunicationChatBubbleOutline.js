module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/chat-bubble-outline": require('material-ui/svg-icons/communication/chat-bubble-outline')
    }
  },
  name: "CommunicationChatBubbleOutline",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationChatBubbleOutline",
        type: "Component"
      }
    }
  }
}