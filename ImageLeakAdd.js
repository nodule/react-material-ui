module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/leak-add": require('material-ui/svg-icons/image/leak-add')
    }
  },
  name: "ImageLeakAdd",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageLeakAdd",
        type: "Component"
      }
    }
  }
}