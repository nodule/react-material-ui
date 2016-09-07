module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/location-on": require('material-ui/svg-icons/communication/location-on')
    }
  },
  name: "CommunicationLocationOn",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationLocationOn",
        type: "Component"
      }
    }
  }
}