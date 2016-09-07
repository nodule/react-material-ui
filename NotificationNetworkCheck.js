module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/network-check": require('material-ui/svg-icons/notification/network-check')
    }
  },
  name: "NotificationNetworkCheck",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationNetworkCheck",
        type: "Component"
      }
    }
  }
}