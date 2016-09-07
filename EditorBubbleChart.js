module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/bubble-chart": require('material-ui/svg-icons/editor/bubble-chart')
    }
  },
  name: "EditorBubbleChart",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorBubbleChart",
        type: "Component"
      }
    }
  }
}