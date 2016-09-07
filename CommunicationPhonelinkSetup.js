module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/phonelink-setup": require('material-ui/svg-icons/communication/phonelink-setup')
    }
  },
  name: "CommunicationPhonelinkSetup",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationPhonelinkSetup",
        type: "Component"
      }
    }
  }
}