module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-align-center": require('material-ui/svg-icons/editor/format-align-center')
    }
  },
  name: "EditorFormatAlignCenter",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatAlignCenter",
        type: "Component"
      }
    }
  }
}