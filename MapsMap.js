module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/map": require('material-ui/svg-icons/maps/map')
    }
  },
  name: "MapsMap",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsMap",
        type: "Component"
      }
    }
  }
}