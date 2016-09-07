module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/call-made": require('material-ui/svg-icons/communication/call-made')
    }
  },
  name: "CommunicationCallMade",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationCallMade",
        type: "Component"
      }
    }
  }
}