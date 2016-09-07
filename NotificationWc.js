module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/wc": require('material-ui/svg-icons/notification/wc')
    }
  },
  name: "NotificationWc",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationWc",
        type: "Component"
      }
    }
  }
}