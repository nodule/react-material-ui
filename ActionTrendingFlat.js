module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/trending-flat": require('material-ui/svg-icons/action/trending-flat')
    }
  },
  name: "ActionTrendingFlat",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionTrendingFlat",
        type: "Component"
      }
    }
  }
}