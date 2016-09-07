module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/flight-land": require('material-ui/svg-icons/action/flight-land')
    }
  },
  name: "ActionFlightLand",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionFlightLand",
        type: "Component"
      }
    }
  }
}