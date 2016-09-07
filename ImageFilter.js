module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/filter": require('material-ui/svg-icons/image/filter')
    }
  },
  name: "ImageFilter",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageFilter",
        type: "Component"
      }
    }
  }
}