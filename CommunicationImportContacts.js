module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/import-contacts": require('material-ui/svg-icons/communication/import-contacts')
    }
  },
  name: "CommunicationImportContacts",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationImportContacts",
        type: "Component"
      }
    }
  }
}