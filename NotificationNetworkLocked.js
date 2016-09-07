module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/network-locked": require('material-ui/svg-icons/notification/network-locked')
    }
  },
  name: "NotificationNetworkLocked",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationNetworkLocked",
        type: "Component"
      }
    }
  }
}