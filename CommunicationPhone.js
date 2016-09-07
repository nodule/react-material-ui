module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/phone": require('material-ui/svg-icons/communication/phone')
    }
  },
  name: "CommunicationPhone",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationPhone",
        type: "Component"
      }
    }
  }
}