module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/sms-failed": require('material-ui/svg-icons/notification/sms-failed')
    }
  },
  name: "NotificationSmsFailed",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationSmsFailed",
        type: "Component"
      }
    }
  }
}