module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/event-seat": require('material-ui/svg-icons/action/event-seat')
    }
  },
  name: "ActionEventSeat",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionEventSeat",
        type: "Component"
      }
    }
  }
}