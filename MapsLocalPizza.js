module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-pizza": require('material-ui/svg-icons/maps/local-pizza')
    }
  },
  name: "MapsLocalPizza",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalPizza",
        type: "Component"
      }
    }
  }
}