module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-library": require('material-ui/svg-icons/maps/local-library')
    }
  },
  name: "MapsLocalLibrary",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalLibrary",
        type: "Component"
      }
    }
  }
}