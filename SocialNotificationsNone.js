module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/notifications-none": require('material-ui/svg-icons/social/notifications-none')
    }
  },
  name: "SocialNotificationsNone",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialNotificationsNone",
        type: "Component"
      }
    }
  }
}