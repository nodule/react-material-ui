module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/label-outline": require('material-ui/svg-icons/action/label-outline')
    }
  },
  name: "ActionLabelOutline",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionLabelOutline",
        type: "Component"
      }
    }
  }
}