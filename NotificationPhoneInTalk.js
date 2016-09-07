module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/phone-in-talk": require('material-ui/svg-icons/notification/phone-in-talk')
    }
  },
  name: "NotificationPhoneInTalk",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationPhoneInTalk",
        type: "Component"
      }
    }
  }
}