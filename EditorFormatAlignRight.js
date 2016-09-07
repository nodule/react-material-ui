module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-align-right": require('material-ui/svg-icons/editor/format-align-right')
    }
  },
  name: "EditorFormatAlignRight",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatAlignRight",
        type: "Component"
      }
    }
  }
}