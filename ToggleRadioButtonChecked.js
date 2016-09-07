module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/toggle/radio-button-checked": require('material-ui/svg-icons/toggle/radio-button-checked')
    }
  },
  name: "ToggleRadioButtonChecked",
  ports: {
    input: {},
    output: {
      component: {
        title: "ToggleRadioButtonChecked",
        type: "Component"
      }
    }
  }
}