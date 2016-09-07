module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/texture": require('material-ui/svg-icons/image/texture')
    }
  },
  name: "ImageTexture",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageTexture",
        type: "Component"
      }
    }
  }
}