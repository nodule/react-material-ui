module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/important-devices": require('material-ui/svg-icons/action/important-devices')
    }
  },
  name: "ActionImportantDevices",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionImportantDevices",
        type: "Component"
      }
    }
  }
}