module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/business": require('material-ui/svg-icons/communication/business')
    }
  },
  name: "CommunicationBusiness",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationBusiness",
        type: "Component"
      }
    }
  }
}