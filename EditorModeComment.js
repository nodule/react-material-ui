module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/mode-comment": require('material-ui/svg-icons/editor/mode-comment')
    }
  },
  name: "EditorModeComment",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorModeComment",
        type: "Component"
      }
    }
  }
}