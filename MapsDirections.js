module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/directions": require('material-ui/svg-icons/maps/directions')
    }
  },
  name: "MapsDirections",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsDirections",
        type: "Component"
      }
    }
  }
}