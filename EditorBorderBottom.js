module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/border-bottom": require('material-ui/svg-icons/editor/border-bottom')
    }
  },
  name: "EditorBorderBottom",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorBorderBottom",
        type: "Component"
      }
    }
  }
}