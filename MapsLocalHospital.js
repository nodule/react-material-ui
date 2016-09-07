module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-hospital": require('material-ui/svg-icons/maps/local-hospital')
    }
  },
  name: "MapsLocalHospital",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalHospital",
        type: "Component"
      }
    }
  }
}