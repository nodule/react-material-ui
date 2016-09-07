module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/rotate-right": require('material-ui/svg-icons/image/rotate-right')
    }
  },
  name: "ImageRotateRight",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageRotateRight",
        type: "Component"
      }
    }
  }
}