module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-color-text": require('material-ui/svg-icons/editor/format-color-text')
    }
  },
  name: "EditorFormatColorText",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatColorText",
        type: "Component"
      }
    }
  }
}