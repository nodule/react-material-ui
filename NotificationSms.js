module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/sms": require('material-ui/svg-icons/notification/sms')
    }
  },
  name: "NotificationSms",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationSms",
        type: "Component"
      }
    }
  }
}