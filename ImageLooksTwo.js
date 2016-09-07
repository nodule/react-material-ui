module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/looks-two": require('material-ui/svg-icons/image/looks-two')
    }
  },
  name: "ImageLooksTwo",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageLooksTwo",
        type: "Component"
      }
    }
  }
}