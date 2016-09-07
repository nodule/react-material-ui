module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/favorite": require('material-ui/svg-icons/action/favorite')
    }
  },
  name: "ActionFavorite",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionFavorite",
        type: "Component"
      }
    }
  }
}