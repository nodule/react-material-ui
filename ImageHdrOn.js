module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/hdr-on": require('material-ui/svg-icons/image/hdr-on')
    }
  },
  name: "ImageHdrOn",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageHdrOn",
        type: "Component"
      }
    }
  }
}