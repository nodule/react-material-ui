module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/border-outer": require('material-ui/svg-icons/editor/border-outer')
    }
  },
  name: "EditorBorderOuter",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorBorderOuter",
        type: "Component"
      }
    }
  }
}