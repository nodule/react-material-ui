module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/time-to-leave": require('material-ui/svg-icons/notification/time-to-leave')
    }
  },
  name: "NotificationTimeToLeave",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationTimeToLeave",
        type: "Component"
      }
    }
  }
}