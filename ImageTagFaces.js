module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/tag-faces": require('material-ui/svg-icons/image/tag-faces')
    }
  },
  name: "ImageTagFaces",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageTagFaces",
        type: "Component"
      }
    }
  }
}