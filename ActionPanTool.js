module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/pan-tool": require('material-ui/svg-icons/action/pan-tool')
    }
  },
  name: "ActionPanTool",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPanTool",
        type: "Component"
      }
    }
  }
}