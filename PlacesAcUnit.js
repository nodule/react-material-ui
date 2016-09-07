module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/places/ac-unit": require('material-ui/svg-icons/places/ac-unit')
    }
  },
  name: "PlacesAcUnit",
  ports: {
    input: {},
    output: {
      component: {
        title: "PlacesAcUnit",
        type: "Component"
      }
    }
  }
}