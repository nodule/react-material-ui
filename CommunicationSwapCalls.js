module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/swap-calls": require('material-ui/svg-icons/communication/swap-calls')
    }
  },
  name: "CommunicationSwapCalls",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationSwapCalls",
        type: "Component"
      }
    }
  }
}