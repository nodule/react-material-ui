module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/power-settings-new": require('material-ui/svg-icons/action/power-settings-new')
    }
  },
  name: "ActionPowerSettingsNew",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPowerSettingsNew",
        type: "Component"
      }
    }
  }
}