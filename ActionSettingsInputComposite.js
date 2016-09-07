module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/settings-input-composite": require('material-ui/svg-icons/action/settings-input-composite')
    }
  },
  name: "ActionSettingsInputComposite",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSettingsInputComposite",
        type: "Component"
      }
    }
  }
}