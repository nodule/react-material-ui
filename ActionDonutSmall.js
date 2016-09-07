module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/donut-small": require('material-ui/svg-icons/action/donut-small')
    }
  },
  name: "ActionDonutSmall",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionDonutSmall",
        type: "Component"
      }
    }
  }
}