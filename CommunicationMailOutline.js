module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/mail-outline": require('material-ui/svg-icons/communication/mail-outline')
    }
  },
  name: "CommunicationMailOutline",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationMailOutline",
        type: "Component"
      }
    }
  }
}