module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-line-spacing": require('material-ui/svg-icons/editor/format-line-spacing')
    }
  },
  name: "EditorFormatLineSpacing",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatLineSpacing",
        type: "Component"
      }
    }
  }
}