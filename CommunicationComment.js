module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/comment": require('material-ui/svg-icons/communication/comment')
    }
  },
  name: "CommunicationComment",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationComment",
        type: "Component"
      }
    }
  }
}