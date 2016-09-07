module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/live-help": require('material-ui/svg-icons/communication/live-help')
    }
  },
  name: "CommunicationLiveHelp",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationLiveHelp",
        type: "Component"
      }
    }
  }
}