module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/space-bar": require('material-ui/svg-icons/editor/space-bar')
    }
  },
  name: "EditorSpaceBar",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorSpaceBar",
        type: "Component"
      }
    }
  }
}