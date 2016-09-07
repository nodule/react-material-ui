module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-align-left": require('material-ui/svg-icons/editor/format-align-left')
    }
  },
  name: "EditorFormatAlignLeft",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatAlignLeft",
        type: "Component"
      }
    }
  }
}