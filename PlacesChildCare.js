module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/places/child-care": require('material-ui/svg-icons/places/child-care')
    }
  },
  name: "PlacesChildCare",
  ports: {
    input: {},
    output: {
      component: {
        title: "PlacesChildCare",
        type: "Component"
      }
    }
  }
}