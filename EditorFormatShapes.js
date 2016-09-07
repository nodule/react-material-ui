module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-shapes": require('material-ui/svg-icons/editor/format-shapes')
    }
  },
  name: "EditorFormatShapes",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatShapes",
        type: "Component"
      }
    }
  }
}