module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/settings-ethernet": require('material-ui/svg-icons/action/settings-ethernet')
    }
  },
  name: "ActionSettingsEthernet",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSettingsEthernet",
        type: "Component"
      }
    }
  }
}