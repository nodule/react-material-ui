module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/aspect-ratio": require('material-ui/svg-icons/action/aspect-ratio')
    }
  },
  name: "ActionAspectRatio",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAspectRatio",
        type: "Component"
      }
    }
  }
}