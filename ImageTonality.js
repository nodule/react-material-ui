module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/tonality": require('material-ui/svg-icons/image/tonality')
    }
  },
  name: "ImageTonality",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageTonality",
        type: "Component"
      }
    }
  }
}