module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/dashboard": require('material-ui/svg-icons/action/dashboard')
    }
  },
  name: "ActionDashboard",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionDashboard",
        type: "Component"
      }
    }
  }
}