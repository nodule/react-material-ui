module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/places/free-breakfast": require('material-ui/svg-icons/places/free-breakfast')
    }
  },
  name: "PlacesFreeBreakfast",
  ports: {
    input: {},
    output: {
      component: {
        title: "PlacesFreeBreakfast",
        type: "Component"
      }
    }
  }
}