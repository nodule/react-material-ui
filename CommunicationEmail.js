module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/email": require('material-ui/svg-icons/communication/email')
    }
  },
  name: "CommunicationEmail",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationEmail",
        type: "Component"
      }
    }
  }
}