module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/toggle/star-border": require('material-ui/svg-icons/toggle/star-border')
    }
  },
  name: "ToggleStarBorder",
  ports: {
    input: {},
    output: {
      component: {
        title: "ToggleStarBorder",
        type: "Component"
      }
    }
  }
}