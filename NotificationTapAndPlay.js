module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/tap-and-play": require('material-ui/svg-icons/notification/tap-and-play')
    }
  },
  name: "NotificationTapAndPlay",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationTapAndPlay",
        type: "Component"
      }
    }
  }
}