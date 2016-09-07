module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/places/child-friendly": require('material-ui/svg-icons/places/child-friendly')
    }
  },
  name: "PlacesChildFriendly",
  ports: {
    input: {},
    output: {
      component: {
        title: "PlacesChildFriendly",
        type: "Component"
      }
    }
  }
}