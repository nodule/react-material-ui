module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/phonelink-lock": require('material-ui/svg-icons/communication/phonelink-lock')
    }
  },
  name: "CommunicationPhonelinkLock",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationPhonelinkLock",
        type: "Component"
      }
    }
  }
}