module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/system-update": require('material-ui/svg-icons/notification/system-update')
    }
  },
  name: "NotificationSystemUpdate",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationSystemUpdate",
        type: "Component"
      }
    }
  }
}