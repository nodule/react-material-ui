module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/stop-screen-share": require('material-ui/svg-icons/communication/stop-screen-share')
    }
  },
  name: "CommunicationStopScreenShare",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationStopScreenShare",
        type: "Component"
      }
    }
  }
}