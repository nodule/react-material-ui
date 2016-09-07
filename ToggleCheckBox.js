module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/toggle/check-box": require('material-ui/svg-icons/toggle/check-box')
    }
  },
  name: "ToggleCheckBox",
  ports: {
    input: {},
    output: {
      component: {
        title: "ToggleCheckBox",
        type: "Component"
      }
    }
  }
}