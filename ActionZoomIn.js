module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/zoom-in": require('material-ui/svg-icons/action/zoom-in')
    }
  },
  name: "ActionZoomIn",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionZoomIn",
        type: "Component"
      }
    }
  }
}