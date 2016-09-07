module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/zoom-out": require('material-ui/svg-icons/action/zoom-out')
    }
  },
  name: "ActionZoomOut",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionZoomOut",
        type: "Component"
      }
    }
  }
}