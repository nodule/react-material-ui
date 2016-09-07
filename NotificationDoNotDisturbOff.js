module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/do-not-disturb-off": require('material-ui/svg-icons/notification/do-not-disturb-off')
    }
  },
  name: "NotificationDoNotDisturbOff",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationDoNotDisturbOff",
        type: "Component"
      }
    }
  }
}