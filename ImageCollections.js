module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/collections": require('material-ui/svg-icons/image/collections')
    }
  },
  name: "ImageCollections",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCollections",
        type: "Component"
      }
    }
  }
}