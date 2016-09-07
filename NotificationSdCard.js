module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/sd-card": require('material-ui/svg-icons/notification/sd-card')
    }
  },
  name: "NotificationSdCard",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationSdCard",
        type: "Component"
      }
    }
  }
}