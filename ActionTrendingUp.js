module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/trending-up": require('material-ui/svg-icons/action/trending-up')
    }
  },
  name: "ActionTrendingUp",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionTrendingUp",
        type: "Component"
      }
    }
  }
}