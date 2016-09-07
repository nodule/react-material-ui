module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/priority-high": require('material-ui/svg-icons/notification/priority-high')
    }
  },
  name: "NotificationPriorityHigh",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationPriorityHigh",
        type: "Component"
      }
    }
  }
}