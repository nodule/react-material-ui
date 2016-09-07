module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/ondemand-video": require('material-ui/svg-icons/notification/ondemand-video')
    }
  },
  name: "NotificationOndemandVideo",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationOndemandVideo",
        type: "Component"
      }
    }
  }
}