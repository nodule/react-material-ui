module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/vertical-align-bottom": require('material-ui/svg-icons/editor/vertical-align-bottom')
    }
  },
  name: "EditorVerticalAlignBottom",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorVerticalAlignBottom",
        type: "Component"
      }
    }
  }
}