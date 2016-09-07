module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/add-shopping-cart": require('material-ui/svg-icons/action/add-shopping-cart')
    }
  },
  name: "ActionAddShoppingCart",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAddShoppingCart",
        type: "Component"
      }
    }
  }
}