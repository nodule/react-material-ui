module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/sync-disabled": require('material-ui/svg-icons/notification/sync-disabled')
    }
  },
  name: "NotificationSyncDisabled",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationSyncDisabled",
        type: "Component"
      }
    }
  }
}