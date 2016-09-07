module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/directions-car": require('material-ui/svg-icons/maps/directions-car')
    }
  },
  name: "MapsDirectionsCar",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsDirectionsCar",
        type: "Component"
      }
    }
  }
}