module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/personal-video": require('material-ui/svg-icons/notification/personal-video')
    }
  },
  name: "NotificationPersonalVideo",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationPersonalVideo",
        type: "Component"
      }
    }
  }
}