module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/places/business-center": require('material-ui/svg-icons/places/business-center')
    }
  },
  name: "PlacesBusinessCenter",
  ports: {
    input: {},
    output: {
      component: {
        title: "PlacesBusinessCenter",
        type: "Component"
      }
    }
  }
}