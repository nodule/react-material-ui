module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/phone-locked": require('material-ui/svg-icons/notification/phone-locked')
    }
  },
  name: "NotificationPhoneLocked",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationPhoneLocked",
        type: "Component"
      }
    }
  }
}