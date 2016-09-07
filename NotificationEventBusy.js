module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/event-busy": require('material-ui/svg-icons/notification/event-busy')
    }
  },
  name: "NotificationEventBusy",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationEventBusy",
        type: "Component"
      }
    }
  }
}