module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/short-text": require('material-ui/svg-icons/editor/short-text')
    }
  },
  name: "EditorShortText",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorShortText",
        type: "Component"
      }
    }
  }
}