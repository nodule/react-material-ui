module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/chat": require('material-ui/svg-icons/communication/chat')
    }
  },
  name: "CommunicationChat",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationChat",
        type: "Component"
      }
    }
  }
}