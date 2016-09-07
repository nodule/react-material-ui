module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/settings-input-antenna": require('material-ui/svg-icons/action/settings-input-antenna')
    }
  },
  name: "ActionSettingsInputAntenna",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSettingsInputAntenna",
        type: "Component"
      }
    }
  }
}