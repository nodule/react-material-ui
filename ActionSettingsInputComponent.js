module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/settings-input-component": require('material-ui/svg-icons/action/settings-input-component')
    }
  },
  name: "ActionSettingsInputComponent",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSettingsInputComponent",
        type: "Component"
      }
    }
  }
}