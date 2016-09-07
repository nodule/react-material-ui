module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/trending-down": require('material-ui/svg-icons/action/trending-down')
    }
  },
  name: "ActionTrendingDown",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionTrendingDown",
        type: "Component"
      }
    }
  }
}