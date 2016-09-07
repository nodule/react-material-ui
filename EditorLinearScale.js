module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/linear-scale": require('material-ui/svg-icons/editor/linear-scale')
    }
  },
  name: "EditorLinearScale",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorLinearScale",
        type: "Component"
      }
    }
  }
}