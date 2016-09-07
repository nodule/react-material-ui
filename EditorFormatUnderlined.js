module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-underlined": require('material-ui/svg-icons/editor/format-underlined')
    }
  },
  name: "EditorFormatUnderlined",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatUnderlined",
        type: "Component"
      }
    }
  }
}