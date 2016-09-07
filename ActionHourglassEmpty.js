module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/hourglass-empty": require('material-ui/svg-icons/action/hourglass-empty')
    }
  },
  name: "ActionHourglassEmpty",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionHourglassEmpty",
        type: "Component"
      }
    }
  }
}