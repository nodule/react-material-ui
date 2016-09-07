module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-car-wash": require('material-ui/svg-icons/maps/local-car-wash')
    }
  },
  name: "MapsLocalCarWash",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalCarWash",
        type: "Component"
      }
    }
  }
}