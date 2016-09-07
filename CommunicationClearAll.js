module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/clear-all": require('material-ui/svg-icons/communication/clear-all')
    }
  },
  name: "CommunicationClearAll",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationClearAll",
        type: "Component"
      }
    }
  }
}