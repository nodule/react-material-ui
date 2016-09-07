module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/toggle/star-half": require('material-ui/svg-icons/toggle/star-half')
    }
  },
  name: "ToggleStarHalf",
  ports: {
    input: {},
    output: {
      component: {
        title: "ToggleStarHalf",
        type: "Component"
      }
    }
  }
}