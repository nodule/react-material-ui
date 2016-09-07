module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/contact-mail": require('material-ui/svg-icons/communication/contact-mail')
    }
  },
  name: "CommunicationContactMail",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationContactMail",
        type: "Component"
      }
    }
  }
}