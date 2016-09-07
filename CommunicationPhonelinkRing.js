module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/phonelink-ring": require('material-ui/svg-icons/communication/phonelink-ring')
    }
  },
  name: "CommunicationPhonelinkRing",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationPhonelinkRing",
        type: "Component"
      }
    }
  }
}