module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/strikethrough-s": require('material-ui/svg-icons/editor/strikethrough-s')
    }
  },
  name: "EditorStrikethroughS",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorStrikethroughS",
        type: "Component"
      }
    }
  }
}