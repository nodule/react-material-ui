module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/places/pool": require('material-ui/svg-icons/places/pool')
    }
  },
  name: "PlacesPool",
  ports: {
    input: {},
    output: {
      component: {
        title: "PlacesPool",
        type: "Component"
      }
    }
  }
}