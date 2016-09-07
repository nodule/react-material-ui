module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/import-export": require('material-ui/svg-icons/communication/import-export')
    }
  },
  name: "CommunicationImportExport",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationImportExport",
        type: "Component"
      }
    }
  }
}