module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/high-quality": require('material-ui/svg-icons/av/high-quality')
    }
  },
  name: "AvHighQuality",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvHighQuality",
        type: "Component"
      }
    }
  }
}