module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/forum": require('material-ui/svg-icons/communication/forum')
    }
  },
  name: "CommunicationForum",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationForum",
        type: "Component"
      }
    }
  }
}