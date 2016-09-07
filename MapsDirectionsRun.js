module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/directions-run": require('material-ui/svg-icons/maps/directions-run')
    }
  },
  name: "MapsDirectionsRun",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsDirectionsRun",
        type: "Component"
      }
    }
  }
}