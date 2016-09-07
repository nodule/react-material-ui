module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/toggle/indeterminate-check-box": require('material-ui/svg-icons/toggle/indeterminate-check-box')
    }
  },
  name: "ToggleIndeterminateCheckBox",
  ports: {
    input: {},
    output: {
      component: {
        title: "ToggleIndeterminateCheckBox",
        type: "Component"
      }
    }
  }
}