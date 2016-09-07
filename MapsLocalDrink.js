module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-drink": require('material-ui/svg-icons/maps/local-drink')
    }
  },
  name: "MapsLocalDrink",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalDrink",
        type: "Component"
      }
    }
  }
}