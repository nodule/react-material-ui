module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/loupe": require('material-ui/svg-icons/image/loupe')
    }
  },
  name: "ImageLoupe",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageLoupe",
        type: "Component"
      }
    }
  }
}