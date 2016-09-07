module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/disc-full": require('material-ui/svg-icons/notification/disc-full')
    }
  },
  name: "NotificationDiscFull",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationDiscFull",
        type: "Component"
      }
    }
  }
}