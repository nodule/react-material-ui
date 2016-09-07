module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/call": require('material-ui/svg-icons/communication/call')
    }
  },
  name: "CommunicationCall",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationCall",
        type: "Component"
      }
    }
  }
}