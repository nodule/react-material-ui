module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/phone-missed": require('material-ui/svg-icons/notification/phone-missed')
    }
  },
  name: "NotificationPhoneMissed",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationPhoneMissed",
        type: "Component"
      }
    }
  }
}