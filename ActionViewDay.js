module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/view-day": require('material-ui/svg-icons/action/view-day')
    }
  },
  name: "ActionViewDay",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionViewDay",
        type: "Component"
      }
    }
  }
}