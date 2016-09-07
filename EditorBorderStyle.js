module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/border-style": require('material-ui/svg-icons/editor/border-style')
    }
  },
  name: "EditorBorderStyle",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorBorderStyle",
        type: "Component"
      }
    }
  }
}