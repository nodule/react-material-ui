module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-atm": require('material-ui/svg-icons/maps/local-atm')
    }
  },
  name: "MapsLocalAtm",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalAtm",
        type: "Component"
      }
    }
  }
}