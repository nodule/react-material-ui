module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/vpn-lock": require('material-ui/svg-icons/notification/vpn-lock')
    }
  },
  name: "NotificationVpnLock",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationVpnLock",
        type: "Component"
      }
    }
  }
}