module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/do-not-disturb-on": require('material-ui/svg-icons/notification/do-not-disturb-on')
    }
  },
  name: "NotificationDoNotDisturbOn",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationDoNotDisturbOn",
        type: "Component"
      }
    }
  }
}