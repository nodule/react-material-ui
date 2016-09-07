module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-paint": require('material-ui/svg-icons/editor/format-paint')
    }
  },
  name: "EditorFormatPaint",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatPaint",
        type: "Component"
      }
    }
  }
}