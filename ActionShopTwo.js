module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/shop-two": require('material-ui/svg-icons/action/shop-two')
    }
  },
  name: "ActionShopTwo",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionShopTwo",
        type: "Component"
      }
    }
  }
}