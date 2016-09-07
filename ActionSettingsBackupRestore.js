module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/settings-backup-restore": require('material-ui/svg-icons/action/settings-backup-restore')
    }
  },
  name: "ActionSettingsBackupRestore",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSettingsBackupRestore",
        type: "Component"
      }
    }
  }
}