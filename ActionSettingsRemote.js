module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/settings-remote": require('material-ui/svg-icons/action/settings-remote')
    }
  },
  name: "ActionSettingsRemote",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSettingsRemote",
        type: "Component"
      }
    }
  }
}