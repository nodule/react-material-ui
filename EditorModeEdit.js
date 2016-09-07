module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/mode-edit": require('material-ui/svg-icons/editor/mode-edit')
    }
  },
  name: "EditorModeEdit",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorModeEdit",
        type: "Component"
      }
    }
  }
}