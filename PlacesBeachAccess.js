module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/places/beach-access": require('material-ui/svg-icons/places/beach-access')
    }
  },
  name: "PlacesBeachAccess",
  ports: {
    input: {},
    output: {
      component: {
        title: "PlacesBeachAccess",
        type: "Component"
      }
    }
  }
}