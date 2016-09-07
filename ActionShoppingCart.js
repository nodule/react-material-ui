module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/shopping-cart": require('material-ui/svg-icons/action/shopping-cart')
    }
  },
  name: "ActionShoppingCart",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionShoppingCart",
        type: "Component"
      }
    }
  }
}