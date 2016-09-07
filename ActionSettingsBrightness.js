module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/settings-brightness": require('material-ui/svg-icons/action/settings-brightness')
    }
  },
  name: "ActionSettingsBrightness",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSettingsBrightness",
        type: "Component"
      }
    }
  }
}