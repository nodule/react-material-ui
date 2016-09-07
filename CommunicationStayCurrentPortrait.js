module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/stay-current-portrait": require('material-ui/svg-icons/communication/stay-current-portrait')
    }
  },
  name: "CommunicationStayCurrentPortrait",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationStayCurrentPortrait",
        type: "Component"
      }
    }
  }
}