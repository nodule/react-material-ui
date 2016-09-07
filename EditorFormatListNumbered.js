module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-list-numbered": require('material-ui/svg-icons/editor/format-list-numbered')
    }
  },
  name: "EditorFormatListNumbered",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatListNumbered",
        type: "Component"
      }
    }
  }
}