module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-cafe": require('material-ui/svg-icons/maps/local-cafe')
    }
  },
  name: "MapsLocalCafe",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalCafe",
        type: "Component"
      }
    }
  }
}