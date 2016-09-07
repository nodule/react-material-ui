module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/phone-forwarded": require('material-ui/svg-icons/notification/phone-forwarded')
    }
  },
  name: "NotificationPhoneForwarded",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationPhoneForwarded",
        type: "Component"
      }
    }
  }
}