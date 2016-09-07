module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-clear": require('material-ui/svg-icons/editor/format-clear')
    }
  },
  name: "EditorFormatClear",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatClear",
        type: "Component"
      }
    }
  }
}