module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/filter-frames": require('material-ui/svg-icons/image/filter-frames')
    }
  },
  name: "ImageFilterFrames",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageFilterFrames",
        type: "Component"
      }
    }
  }
}