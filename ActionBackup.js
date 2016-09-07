module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/backup": require('material-ui/svg-icons/action/backup')
    }
  },
  name: "ActionBackup",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionBackup",
        type: "Component"
      }
    }
  }
}