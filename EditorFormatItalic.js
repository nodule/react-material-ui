module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-italic": require('material-ui/svg-icons/editor/format-italic')
    }
  },
  name: "EditorFormatItalic",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatItalic",
        type: "Component"
      }
    }
  }
}