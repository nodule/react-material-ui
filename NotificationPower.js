module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/power": require('material-ui/svg-icons/notification/power')
    }
  },
  name: "NotificationPower",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationPower",
        type: "Component"
      }
    }
  }
}