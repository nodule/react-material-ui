module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/hdr-weak": require('material-ui/svg-icons/image/hdr-weak')
    }
  },
  name: "ImageHdrWeak",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageHdrWeak",
        type: "Component"
      }
    }
  }
}