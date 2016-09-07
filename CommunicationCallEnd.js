module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/call-end": require('material-ui/svg-icons/communication/call-end')
    }
  },
  name: "CommunicationCallEnd",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationCallEnd",
        type: "Component"
      }
    }
  }
}