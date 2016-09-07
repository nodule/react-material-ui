module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/directions-boat": require('material-ui/svg-icons/maps/directions-boat')
    }
  },
  name: "MapsDirectionsBoat",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsDirectionsBoat",
        type: "Component"
      }
    }
  }
}