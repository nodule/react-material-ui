module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-gas-station": require('material-ui/svg-icons/maps/local-gas-station')
    }
  },
  name: "MapsLocalGasStation",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalGasStation",
        type: "Component"
      }
    }
  }
}