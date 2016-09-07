module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/explore": require('material-ui/svg-icons/action/explore')
    }
  },
  name: "ActionExplore",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionExplore",
        type: "Component"
      }
    }
  }
}