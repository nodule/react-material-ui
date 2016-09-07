module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/remove-shopping-cart": require('material-ui/svg-icons/action/remove-shopping-cart')
    }
  },
  name: "ActionRemoveShoppingCart",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionRemoveShoppingCart",
        type: "Component"
      }
    }
  }
}