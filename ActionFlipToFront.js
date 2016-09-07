module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/flip-to-front": require('material-ui/svg-icons/action/flip-to-front')
    }
  },
  name: "ActionFlipToFront",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionFlipToFront",
        type: "Component"
      }
    }
  }
}