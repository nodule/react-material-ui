module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/dialer-sip": require('material-ui/svg-icons/communication/dialer-sip')
    }
  },
  name: "CommunicationDialerSip",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationDialerSip",
        type: "Component"
      }
    }
  }
}