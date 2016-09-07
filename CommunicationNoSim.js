module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/no-sim": require('material-ui/svg-icons/communication/no-sim')
    }
  },
  name: "CommunicationNoSim",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationNoSim",
        type: "Component"
      }
    }
  }
}