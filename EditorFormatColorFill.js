module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-color-fill": require('material-ui/svg-icons/editor/format-color-fill')
    }
  },
  name: "EditorFormatColorFill",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatColorFill",
        type: "Component"
      }
    }
  }
}