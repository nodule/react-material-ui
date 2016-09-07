module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/textsms": require('material-ui/svg-icons/communication/textsms')
    }
  },
  name: "CommunicationTextsms",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationTextsms",
        type: "Component"
      }
    }
  }
}