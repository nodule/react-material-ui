module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/toggle/radio-button-unchecked": require('material-ui/svg-icons/toggle/radio-button-unchecked')
    }
  },
  name: "ToggleRadioButtonUnchecked",
  ports: {
    input: {},
    output: {
      component: {
        title: "ToggleRadioButtonUnchecked",
        type: "Component"
      }
    }
  }
}