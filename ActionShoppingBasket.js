module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/shopping-basket": require('material-ui/svg-icons/action/shopping-basket')
    }
  },
  name: "ActionShoppingBasket",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionShoppingBasket",
        type: "Component"
      }
    }
  }
}