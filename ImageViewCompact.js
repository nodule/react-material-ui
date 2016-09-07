module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/view-compact": require('material-ui/svg-icons/image/view-compact')
    }
  },
  name: "ImageViewCompact",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageViewCompact",
        type: "Component"
      }
    }
  }
}