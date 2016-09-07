module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/near-me": require('material-ui/svg-icons/maps/near-me')
    }
  },
  name: "MapsNearMe",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsNearMe",
        type: "Component"
      }
    }
  }
}