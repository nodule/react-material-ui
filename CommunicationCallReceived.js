module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/call-received": require('material-ui/svg-icons/communication/call-received')
    }
  },
  name: "CommunicationCallReceived",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationCallReceived",
        type: "Component"
      }
    }
  }
}