module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/my-location": require('material-ui/svg-icons/maps/my-location')
    }
  },
  name: "MapsMyLocation",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsMyLocation",
        type: "Component"
      }
    }
  }
}