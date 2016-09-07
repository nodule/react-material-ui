module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/publish": require('material-ui/svg-icons/editor/publish')
    }
  },
  name: "EditorPublish",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorPublish",
        type: "Component"
      }
    }
  }
}