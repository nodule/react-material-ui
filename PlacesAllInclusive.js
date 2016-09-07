module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/places/all-inclusive": require('material-ui/svg-icons/places/all-inclusive')
    }
  },
  name: "PlacesAllInclusive",
  ports: {
    input: {},
    output: {
      component: {
        title: "PlacesAllInclusive",
        type: "Component"
      }
    }
  }
}