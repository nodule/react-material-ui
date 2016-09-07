module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/directions-railway": require('material-ui/svg-icons/maps/directions-railway')
    }
  },
  name: "MapsDirectionsRailway",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsDirectionsRailway",
        type: "Component"
      }
    }
  }
}