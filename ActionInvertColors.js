module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/invert-colors": require('material-ui/svg-icons/action/invert-colors')
    }
  },
  name: "ActionInvertColors",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionInvertColors",
        type: "Component"
      }
    }
  }
}