module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/settings-cell": require('material-ui/svg-icons/action/settings-cell')
    }
  },
  name: "ActionSettingsCell",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSettingsCell",
        type: "Component"
      }
    }
  }
}