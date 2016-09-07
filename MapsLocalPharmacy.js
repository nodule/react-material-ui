module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-pharmacy": require('material-ui/svg-icons/maps/local-pharmacy')
    }
  },
  name: "MapsLocalPharmacy",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalPharmacy",
        type: "Component"
      }
    }
  }
}