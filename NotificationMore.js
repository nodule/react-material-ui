module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/more": require('material-ui/svg-icons/notification/more')
    }
  },
  name: "NotificationMore",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationMore",
        type: "Component"
      }
    }
  }
}