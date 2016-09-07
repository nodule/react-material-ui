module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/screen-share": require('material-ui/svg-icons/communication/screen-share')
    }
  },
  name: "CommunicationScreenShare",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationScreenShare",
        type: "Component"
      }
    }
  }
}