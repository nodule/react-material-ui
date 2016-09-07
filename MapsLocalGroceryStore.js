module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-grocery-store": require('material-ui/svg-icons/maps/local-grocery-store')
    }
  },
  name: "MapsLocalGroceryStore",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalGroceryStore",
        type: "Component"
      }
    }
  }
}