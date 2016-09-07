module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/vertical-align-center": require('material-ui/svg-icons/editor/vertical-align-center')
    }
  },
  name: "EditorVerticalAlignCenter",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorVerticalAlignCenter",
        type: "Component"
      }
    }
  }
}