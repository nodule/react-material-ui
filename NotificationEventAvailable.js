module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/event-available": require('material-ui/svg-icons/notification/event-available')
    }
  },
  name: "NotificationEventAvailable",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationEventAvailable",
        type: "Component"
      }
    }
  }
}