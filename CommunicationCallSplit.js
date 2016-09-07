module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/call-split": require('material-ui/svg-icons/communication/call-split')
    }
  },
  name: "CommunicationCallSplit",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationCallSplit",
        type: "Component"
      }
    }
  }
}