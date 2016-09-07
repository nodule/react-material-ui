module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/compare-arrows": require('material-ui/svg-icons/action/compare-arrows')
    }
  },
  name: "ActionCompareArrows",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionCompareArrows",
        type: "Component"
      }
    }
  }
}