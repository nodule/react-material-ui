module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/layers": require('material-ui/svg-icons/maps/layers')
    }
  },
  name: "MapsLayers",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLayers",
        type: "Component"
      }
    }
  }
}