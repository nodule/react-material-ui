module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/vibration": require('material-ui/svg-icons/notification/vibration')
    }
  },
  name: "NotificationVibration",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationVibration",
        type: "Component"
      }
    }
  }
}