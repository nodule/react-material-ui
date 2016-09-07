module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/settings-power": require('material-ui/svg-icons/action/settings-power')
    }
  },
  name: "ActionSettingsPower",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSettingsPower",
        type: "Component"
      }
    }
  }
}