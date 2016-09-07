module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/location-off": require('material-ui/svg-icons/communication/location-off')
    }
  },
  name: "CommunicationLocationOff",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationLocationOff",
        type: "Component"
      }
    }
  }
}