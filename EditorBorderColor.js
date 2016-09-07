module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/border-color": require('material-ui/svg-icons/editor/border-color')
    }
  },
  name: "EditorBorderColor",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorBorderColor",
        type: "Component"
      }
    }
  }
}