module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/places/rv-hookup": require('material-ui/svg-icons/places/rv-hookup')
    }
  },
  name: "PlacesRvHookup",
  ports: {
    input: {},
    output: {
      component: {
        title: "PlacesRvHookup",
        type: "Component"
      }
    }
  }
}