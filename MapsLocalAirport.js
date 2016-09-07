module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-airport": require('material-ui/svg-icons/maps/local-airport')
    }
  },
  name: "MapsLocalAirport",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalAirport",
        type: "Component"
      }
    }
  }
}