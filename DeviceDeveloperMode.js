module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/developer-mode": require('material-ui/svg-icons/device/developer-mode')
    }
  },
  name: "DeviceDeveloperMode",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceDeveloperMode",
        type: "Component"
      }
    }
  }
}