module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-strikethrough": require('material-ui/svg-icons/editor/format-strikethrough')
    }
  },
  name: "EditorFormatStrikethrough",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatStrikethrough",
        type: "Component"
      }
    }
  }
}