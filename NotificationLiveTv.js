module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/live-tv": require('material-ui/svg-icons/notification/live-tv')
    }
  },
  name: "NotificationLiveTv",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationLiveTv",
        type: "Component"
      }
    }
  }
}