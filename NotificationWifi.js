module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/wifi": require('material-ui/svg-icons/notification/wifi')
    }
  },
  name: "NotificationWifi",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationWifi",
        type: "Component"
      }
    }
  }
}