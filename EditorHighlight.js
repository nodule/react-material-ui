module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/highlight": require('material-ui/svg-icons/editor/highlight')
    }
  },
  name: "EditorHighlight",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorHighlight",
        type: "Component"
      }
    }
  }
}