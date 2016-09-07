module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/phone-paused": require('material-ui/svg-icons/notification/phone-paused')
    }
  },
  name: "NotificationPhonePaused",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationPhonePaused",
        type: "Component"
      }
    }
  }
}