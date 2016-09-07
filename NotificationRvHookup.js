module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/rv-hookup": require('material-ui/svg-icons/notification/rv-hookup')
    }
  },
  name: "NotificationRvHookup",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationRvHookup",
        type: "Component"
      }
    }
  }
}