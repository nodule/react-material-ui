module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/hdr-strong": require('material-ui/svg-icons/image/hdr-strong')
    }
  },
  name: "ImageHdrStrong",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageHdrStrong",
        type: "Component"
      }
    }
  }
}