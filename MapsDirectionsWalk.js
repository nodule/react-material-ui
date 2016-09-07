module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/directions-walk": require('material-ui/svg-icons/maps/directions-walk')
    }
  },
  name: "MapsDirectionsWalk",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsDirectionsWalk",
        type: "Component"
      }
    }
  }
}