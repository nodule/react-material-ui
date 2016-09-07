module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/insert-invitation": require('material-ui/svg-icons/editor/insert-invitation')
    }
  },
  name: "EditorInsertInvitation",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorInsertInvitation",
        type: "Component"
      }
    }
  }
}