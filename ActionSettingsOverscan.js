module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/settings-overscan": require('material-ui/svg-icons/action/settings-overscan')
    }
  },
  name: "ActionSettingsOverscan",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSettingsOverscan",
        type: "Component"
      }
    }
  }
}