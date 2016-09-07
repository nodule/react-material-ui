module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/call-missed-outgoing": require('material-ui/svg-icons/communication/call-missed-outgoing')
    }
  },
  name: "CommunicationCallMissedOutgoing",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationCallMissedOutgoing",
        type: "Component"
      }
    }
  }
}