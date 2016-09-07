module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/sync-problem": require('material-ui/svg-icons/notification/sync-problem')
    }
  },
  name: "NotificationSyncProblem",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationSyncProblem",
        type: "Component"
      }
    }
  }
}