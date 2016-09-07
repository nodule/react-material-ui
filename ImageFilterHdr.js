module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/filter-hdr": require('material-ui/svg-icons/image/filter-hdr')
    }
  },
  name: "ImageFilterHdr",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageFilterHdr",
        type: "Component"
      }
    }
  }
}