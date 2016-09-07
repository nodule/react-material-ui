module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/confirmation-number": require('material-ui/svg-icons/notification/confirmation-number')
    }
  },
  name: "NotificationConfirmationNumber",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationConfirmationNumber",
        type: "Component"
      }
    }
  }
}