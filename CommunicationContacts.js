module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/contacts": require('material-ui/svg-icons/communication/contacts')
    }
  },
  name: "CommunicationContacts",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationContacts",
        type: "Component"
      }
    }
  }
}