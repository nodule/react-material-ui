module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/contact-phone": require('material-ui/svg-icons/communication/contact-phone')
    }
  },
  name: "CommunicationContactPhone",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationContactPhone",
        type: "Component"
      }
    }
  }
}