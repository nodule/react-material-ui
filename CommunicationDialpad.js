module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/dialpad": require('material-ui/svg-icons/communication/dialpad')
    }
  },
  name: "CommunicationDialpad",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationDialpad",
        type: "Component"
      }
    }
  }
}