module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/mms": require('material-ui/svg-icons/notification/mms')
    }
  },
  name: "NotificationMms",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationMms",
        type: "Component"
      }
    }
  }
}