module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/layers-clear": require('material-ui/svg-icons/maps/layers-clear')
    }
  },
  name: "MapsLayersClear",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLayersClear",
        type: "Component"
      }
    }
  }
}