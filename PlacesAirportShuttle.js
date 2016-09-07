module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/places/airport-shuttle": require('material-ui/svg-icons/places/airport-shuttle')
    }
  },
  name: "PlacesAirportShuttle",
  ports: {
    input: {},
    output: {
      component: {
        title: "PlacesAirportShuttle",
        type: "Component"
      }
    }
  }
}