module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-hotel": require('material-ui/svg-icons/maps/local-hotel')
    }
  },
  name: "MapsLocalHotel",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalHotel",
        type: "Component"
      }
    }
  }
}