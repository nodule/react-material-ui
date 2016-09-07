module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/shop": require('material-ui/svg-icons/action/shop')
    }
  },
  name: "ActionShop",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionShop",
        type: "Component"
      }
    }
  }
}