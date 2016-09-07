module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-size": require('material-ui/svg-icons/editor/format-size')
    }
  },
  name: "EditorFormatSize",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatSize",
        type: "Component"
      }
    }
  }
}