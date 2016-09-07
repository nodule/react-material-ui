module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/present-to-all": require('material-ui/svg-icons/communication/present-to-all')
    }
  },
  name: "CommunicationPresentToAll",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationPresentToAll",
        type: "Component"
      }
    }
  }
}