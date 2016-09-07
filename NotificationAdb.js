module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/adb": require('material-ui/svg-icons/notification/adb')
    }
  },
  name: "NotificationAdb",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationAdb",
        type: "Component"
      }
    }
  }
}