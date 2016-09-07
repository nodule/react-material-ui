module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/hdr-off": require('material-ui/svg-icons/image/hdr-off')
    }
  },
  name: "ImageHdrOff",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageHdrOff",
        type: "Component"
      }
    }
  }
}