module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/settings-phone": require('material-ui/svg-icons/action/settings-phone')
    }
  },
  name: "ActionSettingsPhone",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSettingsPhone",
        type: "Component"
      }
    }
  }
}