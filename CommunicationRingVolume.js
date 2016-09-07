module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/ring-volume": require('material-ui/svg-icons/communication/ring-volume')
    }
  },
  name: "CommunicationRingVolume",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationRingVolume",
        type: "Component"
      }
    }
  }
}