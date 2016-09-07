module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/leak-remove": require('material-ui/svg-icons/image/leak-remove')
    }
  },
  name: "ImageLeakRemove",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageLeakRemove",
        type: "Component"
      }
    }
  }
}