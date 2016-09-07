module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/favorite-border": require('material-ui/svg-icons/action/favorite-border')
    }
  },
  name: "ActionFavoriteBorder",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionFavoriteBorder",
        type: "Component"
      }
    }
  }
}