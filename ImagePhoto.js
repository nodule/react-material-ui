module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/photo": require('material-ui/svg-icons/image/photo')
    }
  },
  name: "ImagePhoto",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImagePhoto",
        type: "Component"
      }
    }
  }
}