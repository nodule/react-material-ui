module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-indent-decrease": require('material-ui/svg-icons/editor/format-indent-decrease')
    }
  },
  name: "EditorFormatIndentDecrease",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatIndentDecrease",
        type: "Component"
      }
    }
  }
}