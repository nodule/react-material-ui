module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/compare": require('material-ui/svg-icons/image/compare')
    }
  },
  name: "ImageCompare",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCompare",
        type: "Component"
      }
    }
  }
}