module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/looks": require('material-ui/svg-icons/image/looks')
    }
  },
  name: "ImageLooks",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageLooks",
        type: "Component"
      }
    }
  }
}