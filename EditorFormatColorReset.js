module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-color-reset": require('material-ui/svg-icons/editor/format-color-reset')
    }
  },
  name: "EditorFormatColorReset",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatColorReset",
        type: "Component"
      }
    }
  }
}