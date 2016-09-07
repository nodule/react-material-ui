module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/functions": require('material-ui/svg-icons/editor/functions')
    }
  },
  name: "EditorFunctions",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFunctions",
        type: "Component"
      }
    }
  }
}