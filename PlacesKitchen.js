module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/places/kitchen": require('material-ui/svg-icons/places/kitchen')
    }
  },
  name: "PlacesKitchen",
  ports: {
    input: {},
    output: {
      component: {
        title: "PlacesKitchen",
        type: "Component"
      }
    }
  }
}