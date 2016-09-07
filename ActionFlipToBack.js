module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/flip-to-back": require('material-ui/svg-icons/action/flip-to-back')
    }
  },
  name: "ActionFlipToBack",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionFlipToBack",
        type: "Component"
      }
    }
  }
}