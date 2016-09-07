module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/no-encryption": require('material-ui/svg-icons/notification/no-encryption')
    }
  },
  name: "NotificationNoEncryption",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationNoEncryption",
        type: "Component"
      }
    }
  }
}