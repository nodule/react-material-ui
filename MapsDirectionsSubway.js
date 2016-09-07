module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/directions-subway": require('material-ui/svg-icons/maps/directions-subway')
    }
  },
  name: "MapsDirectionsSubway",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsDirectionsSubway",
        type: "Component"
      }
    }
  }
}