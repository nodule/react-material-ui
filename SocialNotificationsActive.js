module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/notifications-active": require('material-ui/svg-icons/social/notifications-active')
    }
  },
  name: "SocialNotificationsActive",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialNotificationsActive",
        type: "Component"
      }
    }
  }
}