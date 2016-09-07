module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/border-vertical": require('material-ui/svg-icons/editor/border-vertical')
    }
  },
  name: "EditorBorderVertical",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorBorderVertical",
        type: "Component"
      }
    }
  }
}