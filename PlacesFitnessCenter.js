module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/places/fitness-center": require('material-ui/svg-icons/places/fitness-center')
    }
  },
  name: "PlacesFitnessCenter",
  ports: {
    input: {},
    output: {
      component: {
        title: "PlacesFitnessCenter",
        type: "Component"
      }
    }
  }
}