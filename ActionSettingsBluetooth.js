module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/settings-bluetooth": require('material-ui/svg-icons/action/settings-bluetooth')
    }
  },
  name: "ActionSettingsBluetooth",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSettingsBluetooth",
        type: "Component"
      }
    }
  }
}