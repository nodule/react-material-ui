module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/enhanced-encryption": require('material-ui/svg-icons/notification/enhanced-encryption')
    }
  },
  name: "NotificationEnhancedEncryption",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationEnhancedEncryption",
        type: "Component"
      }
    }
  }
}