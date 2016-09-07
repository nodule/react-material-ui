module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/message": require('material-ui/svg-icons/communication/message')
    }
  },
  name: "CommunicationMessage",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationMessage",
        type: "Component"
      }
    }
  }
}