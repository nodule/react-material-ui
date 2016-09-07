module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/lightbulb-outline": require('material-ui/svg-icons/action/lightbulb-outline')
    }
  },
  name: "ActionLightbulbOutline",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionLightbulbOutline",
        type: "Component"
      }
    }
  }
}