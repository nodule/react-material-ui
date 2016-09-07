module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/hotel": require('material-ui/svg-icons/maps/hotel')
    }
  },
  name: "MapsHotel",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsHotel",
        type: "Component"
      }
    }
  }
}