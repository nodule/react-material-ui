module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/do-not-disturb": require('material-ui/svg-icons/notification/do-not-disturb')
    }
  },
  name: "NotificationDoNotDisturb",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationDoNotDisturb",
        type: "Component"
      }
    }
  }
}