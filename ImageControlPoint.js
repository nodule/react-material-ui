module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/control-point": require('material-ui/svg-icons/image/control-point')
    }
  },
  name: "ImageControlPoint",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageControlPoint",
        type: "Component"
      }
    }
  }
}