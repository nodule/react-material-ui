module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/donut-large": require('material-ui/svg-icons/action/donut-large')
    }
  },
  name: "ActionDonutLarge",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionDonutLarge",
        type: "Component"
      }
    }
  }
}