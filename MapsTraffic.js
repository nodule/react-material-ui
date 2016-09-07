module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/traffic": require('material-ui/svg-icons/maps/traffic')
    }
  },
  name: "MapsTraffic",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsTraffic",
        type: "Component"
      }
    }
  }
}