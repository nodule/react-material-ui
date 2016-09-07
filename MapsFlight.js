module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/flight": require('material-ui/svg-icons/maps/flight')
    }
  },
  name: "MapsFlight",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsFlight",
        type: "Component"
      }
    }
  }
}