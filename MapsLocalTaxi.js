module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-taxi": require('material-ui/svg-icons/maps/local-taxi')
    }
  },
  name: "MapsLocalTaxi",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalTaxi",
        type: "Component"
      }
    }
  }
}