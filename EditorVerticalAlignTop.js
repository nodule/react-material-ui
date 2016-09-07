module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/vertical-align-top": require('material-ui/svg-icons/editor/vertical-align-top')
    }
  },
  name: "EditorVerticalAlignTop",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorVerticalAlignTop",
        type: "Component"
      }
    }
  }
}