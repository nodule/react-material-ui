module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/toggle/star": require('material-ui/svg-icons/toggle/star')
    }
  },
  name: "ToggleStar",
  ports: {
    input: {},
    output: {
      component: {
        title: "ToggleStar",
        type: "Component"
      }
    }
  }
}