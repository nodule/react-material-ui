module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/dehaze": require('material-ui/svg-icons/image/dehaze')
    }
  },
  name: "ImageDehaze",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageDehaze",
        type: "Component"
      }
    }
  }
}