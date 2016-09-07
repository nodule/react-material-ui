module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/streetview": require('material-ui/svg-icons/maps/streetview')
    }
  },
  name: "MapsStreetview",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsStreetview",
        type: "Component"
      }
    }
  }
}