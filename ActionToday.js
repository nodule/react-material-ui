module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/today": require('material-ui/svg-icons/action/today')
    }
  },
  name: "ActionToday",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionToday",
        type: "Component"
      }
    }
  }
}