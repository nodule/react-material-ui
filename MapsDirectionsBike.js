module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/directions-bike": require('material-ui/svg-icons/maps/directions-bike')
    }
  },
  name: "MapsDirectionsBike",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsDirectionsBike",
        type: "Component"
      }
    }
  }
}