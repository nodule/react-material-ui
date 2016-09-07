module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/call-merge": require('material-ui/svg-icons/communication/call-merge')
    }
  },
  name: "CommunicationCallMerge",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationCallMerge",
        type: "Component"
      }
    }
  }
}