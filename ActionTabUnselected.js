module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/tab-unselected": require('material-ui/svg-icons/action/tab-unselected')
    }
  },
  name: "ActionTabUnselected",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionTabUnselected",
        type: "Component"
      }
    }
  }
}