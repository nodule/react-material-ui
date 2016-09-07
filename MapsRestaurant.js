module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/restaurant": require('material-ui/svg-icons/maps/restaurant')
    }
  },
  name: "MapsRestaurant",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsRestaurant",
        type: "Component"
      }
    }
  }
}