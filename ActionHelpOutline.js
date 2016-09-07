module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/help-outline": require('material-ui/svg-icons/action/help-outline')
    }
  },
  name: "ActionHelpOutline",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionHelpOutline",
        type: "Component"
      }
    }
  }
}