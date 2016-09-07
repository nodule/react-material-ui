module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-bold": require('material-ui/svg-icons/editor/format-bold')
    }
  },
  name: "EditorFormatBold",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatBold",
        type: "Component"
      }
    }
  }
}