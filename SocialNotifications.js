module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/notifications": require('material-ui/svg-icons/social/notifications')
    }
  },
  name: "SocialNotifications",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialNotifications",
        type: "Component"
      }
    }
  }
}