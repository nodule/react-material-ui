module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-indent-increase": require('material-ui/svg-icons/editor/format-indent-increase')
    }
  },
  name: "EditorFormatIndentIncrease",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatIndentIncrease",
        type: "Component"
      }
    }
  }
}