module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/settings-applications": require('material-ui/svg-icons/action/settings-applications')
    }
  },
  name: "ActionSettingsApplications",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSettingsApplications",
        type: "Component"
      }
    }
  }
}