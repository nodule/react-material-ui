module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/title": require('material-ui/svg-icons/editor/title')
    }
  },
  name: "EditorTitle",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorTitle",
        type: "Component"
      }
    }
  }
}