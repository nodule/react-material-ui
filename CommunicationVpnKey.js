module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/vpn-key": require('material-ui/svg-icons/communication/vpn-key')
    }
  },
  name: "CommunicationVpnKey",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationVpnKey",
        type: "Component"
      }
    }
  }
}