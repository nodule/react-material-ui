module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-dining": require('material-ui/svg-icons/maps/local-dining')
    }
  },
  name: "MapsLocalDining",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalDining",
        type: "Component"
      }
    }
  }
}