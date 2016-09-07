module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/restaurant-menu": require('material-ui/svg-icons/maps/restaurant-menu')
    }
  },
  name: "MapsRestaurantMenu",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsRestaurantMenu",
        type: "Component"
      }
    }
  }
}