module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/show-chart": require('material-ui/svg-icons/editor/show-chart')
    }
  },
  name: "EditorShowChart",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorShowChart",
        type: "Component"
      }
    }
  }
}