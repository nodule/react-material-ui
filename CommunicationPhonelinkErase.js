module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/phonelink-erase": require('material-ui/svg-icons/communication/phonelink-erase')
    }
  },
  name: "CommunicationPhonelinkErase",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationPhonelinkErase",
        type: "Component"
      }
    }
  }
}