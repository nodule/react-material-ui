module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/view-comfy": require('material-ui/svg-icons/image/view-comfy')
    }
  },
  name: "ImageViewComfy",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageViewComfy",
        type: "Component"
      }
    }
  }
}