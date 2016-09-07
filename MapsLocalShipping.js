module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-shipping": require('material-ui/svg-icons/maps/local-shipping')
    }
  },
  name: "MapsLocalShipping",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalShipping",
        type: "Component"
      }
    }
  }
}