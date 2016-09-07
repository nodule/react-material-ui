module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/sim-card-alert": require('material-ui/svg-icons/notification/sim-card-alert')
    }
  },
  name: "NotificationSimCardAlert",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationSimCardAlert",
        type: "Component"
      }
    }
  }
}