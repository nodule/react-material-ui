module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/perm-scan-wifi": require('material-ui/svg-icons/action/perm-scan-wifi')
    }
  },
  name: "ActionPermScanWifi",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPermScanWifi",
        type: "Component"
      }
    }
  }
}