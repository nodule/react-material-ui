module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/border-left": require('material-ui/svg-icons/editor/border-left')
    }
  },
  name: "EditorBorderLeft",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorBorderLeft",
        type: "Component"
      }
    }
  }
}