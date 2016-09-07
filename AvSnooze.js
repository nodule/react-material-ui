module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/snooze": require('material-ui/svg-icons/av/snooze')
    }
  },
  name: "AvSnooze",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvSnooze",
        type: "Component"
      }
    }
  }
}