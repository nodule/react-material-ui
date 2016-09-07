module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/call-missed": require('material-ui/svg-icons/communication/call-missed')
    }
  },
  name: "CommunicationCallMissed",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationCallMissed",
        type: "Component"
      }
    }
  }
}