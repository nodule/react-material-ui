module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/event-note": require('material-ui/svg-icons/notification/event-note')
    }
  },
  name: "NotificationEventNote",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationEventNote",
        type: "Component"
      }
    }
  }
}