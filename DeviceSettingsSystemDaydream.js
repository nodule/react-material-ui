module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/settings-system-daydream": require('material-ui/svg-icons/device/settings-system-daydream')
    }
  },
  name: "DeviceSettingsSystemDaydream",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSettingsSystemDaydream",
        type: "Component"
      }
    }
  }
}