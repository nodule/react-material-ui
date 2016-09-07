module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/straighten": require('material-ui/svg-icons/image/straighten')
    }
  },
  name: "ImageStraighten",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageStraighten",
        type: "Component"
      }
    }
  }
}