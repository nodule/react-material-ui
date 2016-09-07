module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/directions-transit": require('material-ui/svg-icons/maps/directions-transit')
    }
  },
  name: "MapsDirectionsTransit",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsDirectionsTransit",
        type: "Component"
      }
    }
  }
}