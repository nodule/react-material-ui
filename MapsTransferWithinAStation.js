module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/transfer-within-a-station": require('material-ui/svg-icons/maps/transfer-within-a-station')
    }
  },
  name: "MapsTransferWithinAStation",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsTransferWithinAStation",
        type: "Component"
      }
    }
  }
}