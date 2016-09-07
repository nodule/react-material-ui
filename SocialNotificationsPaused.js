module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/notifications-paused": require('material-ui/svg-icons/social/notifications-paused')
    }
  },
  name: "SocialNotificationsPaused",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialNotificationsPaused",
        type: "Component"
      }
    }
  }
}