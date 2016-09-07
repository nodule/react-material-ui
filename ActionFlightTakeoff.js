module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/flight-takeoff": require('material-ui/svg-icons/action/flight-takeoff')
    }
  },
  name: "ActionFlightTakeoff",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionFlightTakeoff",
        type: "Component"
      }
    }
  }
}