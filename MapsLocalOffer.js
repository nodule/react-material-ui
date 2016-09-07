module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-offer": require('material-ui/svg-icons/maps/local-offer')
    }
  },
  name: "MapsLocalOffer",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalOffer",
        type: "Component"
      }
    }
  }
}