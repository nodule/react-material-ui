module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/perm-data-setting": require('material-ui/svg-icons/action/perm-data-setting')
    }
  },
  name: "ActionPermDataSetting",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPermDataSetting",
        type: "Component"
      }
    }
  }
}