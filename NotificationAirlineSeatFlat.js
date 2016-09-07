module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/airline-seat-flat": require('material-ui/svg-icons/notification/airline-seat-flat')
    }
  },
  name: "NotificationAirlineSeatFlat",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationAirlineSeatFlat",
        type: "Component"
      }
    }
  }
}