module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/sync": require('material-ui/svg-icons/notification/sync')
    }
  },
  name: "NotificationSync",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationSync",
        type: "Component"
      }
    }
  }
}