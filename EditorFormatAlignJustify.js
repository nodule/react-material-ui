module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-align-justify": require('material-ui/svg-icons/editor/format-align-justify')
    }
  },
  name: "EditorFormatAlignJustify",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatAlignJustify",
        type: "Component"
      }
    }
  }
}